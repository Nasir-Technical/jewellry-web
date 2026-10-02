const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getSessionId = (req) => {
    const sessionId = req.get('x-guest-session-id') || req.body?.guestSessionId || req.query?.guestSessionId;

    if (!sessionId || typeof sessionId !== 'string' || sessionId.trim().length < 8 || sessionId.trim().length > 128) {
        const error = new Error('A valid x-guest-session-id header is required for guest carts');
        error.statusCode = 400;
        throw error;
    }

    return sessionId.trim();
};

const getCartOwner = (req) => {
    if (req.user) {
        return { user: req.user.id };
    }

    return { guestSessionId: getSessionId(req) };
};

const populateCart = (cart) => {
    return cart.populate('items.product', 'title slug image images price salePrice inventory status');
};

const findCartItem = (cart, productId, selectedVariant) => {
    return cart.items.findIndex((item) => {
        const productMatches = item.product._id
            ? item.product._id.toString() === productId
            : item.product.toString() === productId;
        const currentVariant = item.selectedVariant
            ? JSON.stringify(item.selectedVariant.toObject ? item.selectedVariant.toObject() : item.selectedVariant)
            : null;
        const requestedVariant = selectedVariant ? JSON.stringify(selectedVariant) : null;
        return productMatches && currentVariant === requestedVariant;
    });
};

const getProductPrice = (product) => {
    return product.salePrice ?? product.price;
};

const recalculateTotal = (cart) => {
    cart.totalAmount = cart.items.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
};

const getCart = async (req, res, next) => {
    try {
        const owner = getCartOwner(req);
        const cart = await Cart.findOne(owner);

        if (!cart) {
            return res.status(200).json({
                success: true,
                data: {
                    user: owner.user || null,
                    guestSessionId: owner.guestSessionId || null,
                    items: [],
                    totalAmount: 0
                }
            });
        }

        res.status(200).json({
            success: true,
            data: await populateCart(cart)
        });
    } catch (error) {
        next(error);
    }
};

const addToCart = async (req, res, next) => {
    try {
        const owner = getCartOwner(req);
        const { productId, quantity, selectedVariant } = req.validatedCart;
        const product = await Product.findOne({ _id: productId, status: 'active' });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        if (quantity > product.inventory.stock) {
            return res.status(409).json({
                success: false,
                message: 'Requested quantity exceeds available stock'
            });
        }

        let cart = await Cart.findOne(owner);
        if (!cart) {
            cart = await Cart.create({ ...owner, items: [], totalAmount: 0 });
        }

        const itemIndex = findCartItem(cart, productId, selectedVariant);
        const requestedQuantity = itemIndex >= 0 ? cart.items[itemIndex].quantity + quantity : quantity;

        if (requestedQuantity > product.inventory.stock) {
            return res.status(409).json({
                success: false,
                message: 'Requested quantity exceeds available stock'
            });
        }

        if (itemIndex >= 0) {
            cart.items[itemIndex].quantity = requestedQuantity;
            cart.items[itemIndex].unitPrice = getProductPrice(product);
        } else {
            cart.items.push({
                product: product._id,
                quantity,
                selectedVariant: selectedVariant || null,
                unitPrice: getProductPrice(product)
            });
        }

        recalculateTotal(cart);
        await cart.save();

        res.status(200).json({
            success: true,
            data: await populateCart(cart)
        });
    } catch (error) {
        next(error);
    }
};

const updateCartItem = async (req, res, next) => {
    try {
        const owner = getCartOwner(req);
        const { productId, itemId, quantity, selectedVariant } = req.validatedCart;
        const cart = await Cart.findOne(owner);

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: 'Cart not found'
            });
        }

        const itemIndex = itemId
            ? cart.items.findIndex((item) => item._id.toString() === itemId)
            : findCartItem(cart, productId, selectedVariant);

        if (itemIndex < 0) {
            return res.status(404).json({
                success: false,
                message: 'Cart item not found'
            });
        }

        const item = cart.items[itemIndex];
        const product = await Product.findOne({ _id: item.product, status: 'active' });

        if (!product) {
            return res.status(409).json({
                success: false,
                message: 'Product is no longer available'
            });
        }

        if (quantity > product.inventory.stock) {
            return res.status(409).json({
                success: false,
                message: 'Requested quantity exceeds available stock'
            });
        }

        item.quantity = quantity;
        item.unitPrice = getProductPrice(product);
        recalculateTotal(cart);
        await cart.save();

        res.status(200).json({
            success: true,
            data: await populateCart(cart)
        });
    } catch (error) {
        next(error);
    }
};

const removeFromCart = async (req, res, next) => {
    try {
        const owner = getCartOwner(req);
        const { productId, itemId, selectedVariant } = req.validatedCart;
        const cart = await Cart.findOne(owner);

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: 'Cart not found'
            });
        }

        const itemIndex = itemId
            ? cart.items.findIndex((item) => item._id.toString() === itemId)
            : findCartItem(cart, productId, selectedVariant);

        if (itemIndex < 0) {
            return res.status(404).json({
                success: false,
                message: 'Cart item not found'
            });
        }

        cart.items.splice(itemIndex, 1);
        recalculateTotal(cart);
        await cart.save();

        res.status(200).json({
            success: true,
            data: await populateCart(cart)
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart
};
