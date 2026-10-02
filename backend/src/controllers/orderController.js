const crypto = require('crypto');
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const Product = require('../models/Product');

const DEFAULT_TAX_RATE = Number(process.env.DEFAULT_TAX_RATE ?? 0.08);

const generateOrderNumber = async () => {
    for (let attempt = 0; attempt < 5; attempt += 1) {
        const orderNumber = `AUR-${Date.now()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
        const existing = await Order.findOne({ orderNumber });

        if (!existing) {
            return orderNumber;
        }
    }

    throw new Error('Unable to generate a unique order number');
};

const getCart = async (userId) => {
    return await Cart.findOne({ user: userId })
        .populate('items.product')
        .sort({ updatedAt: -1 });
};

const createOrderItems = (cart) => {
    return cart.items.map((item) => ({
        product: item.product._id,
        title: item.product.title,
        slug: item.product.slug,
        image: item.product.image || item.product.images?.[0]?.url || '',
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        selectedVariant: item.selectedVariant || null
    }));
};

const reserveStock = async (items) => {
    const reservations = [];

    try {
        for (const item of items) {
            const result = await Product.updateOne(
                {
                    _id: item.product,
                    status: 'active',
                    'inventory.stock': { $gte: item.quantity }
                },
                {
                    $inc: { 'inventory.stock': -item.quantity }
                }
            );

            if (result.modifiedCount !== 1) {
                const error = new Error(`Insufficient stock for ${item.title}`);
                error.statusCode = 409;
                throw error;
            }

            reservations.push(item);
        }

        return reservations;
    } catch (error) {
        await restoreStock(reservations);
        throw error;
    }
};

const restoreStock = async (items) => {
    for (const item of items) {
        await Product.updateOne(
            { _id: item.product },
            { $inc: { 'inventory.stock': item.quantity } }
        );
    }
};

const create = async (req, res, next) => {
    try {
        const cart = await getCart(req.user.id);

        if (!cart || !cart.items.length) {
            return res.status(400).json({
                success: false,
                message: 'Cart is empty'
            });
        }

        const orderItems = createOrderItems(cart);
        const subtotal = orderItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
        const tax = req.validatedOrder.tax ?? Math.round(subtotal * (Number.isFinite(DEFAULT_TAX_RATE) ? DEFAULT_TAX_RATE : 0.08));
        const shippingCost = req.validatedOrder.shippingCost;
        const total = subtotal + tax + shippingCost;
        const reservedItems = await reserveStock(orderItems);

        let createdOrder;

        try {
            createdOrder = await Order.create({
                user: req.user.id,
                orderNumber: await generateOrderNumber(),
                items: orderItems,
                shippingAddress: req.validatedOrder.shippingAddress,
                paymentInfo: req.validatedOrder.paymentInfo,
                orderStatus: 'pending',
                subtotal,
                tax,
                shippingCost,
                total
            });

            await Cart.deleteOne({ user: req.user.id });
            const populatedOrder = await Order.findById(createdOrder._id).populate('items.product', 'title slug image inventory status');

            res.status(201).json({
                success: true,
                data: populatedOrder
            });
        } catch (error) {
            if (createdOrder) {
                await Order.deleteOne({ _id: createdOrder._id });
            }
            await restoreStock(reservedItems);
            throw error;
        }
    } catch (error) {
        next(error);
    }
};

const myOrders = async (req, res, next) => {
    try {
        const page = Math.min(1000, Math.max(1, Number.parseInt(req.query.page, 10) || 1));
        const limit = Math.min(100, Math.max(1, Number.parseInt(req.query.limit, 10) || 12));
        const [orders, total] = await Promise.all([
            Order.find({ user: req.user.id })
                .populate('items.product', 'title slug image inventory status')
                .sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(limit),
            Order.countDocuments({ user: req.user.id })
        ]);

        res.status(200).json({
            success: true,
            data: {
                orders,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    myOrders
};
