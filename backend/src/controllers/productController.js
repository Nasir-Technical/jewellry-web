const Product = require('../models/Product');
const Category = require('../models/Category');

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const parsePagination = (value, fallback, maximum) => {
    const parsed = Number.parseInt(value, 10);

    if (!Number.isFinite(parsed)) {
        return fallback;
    }

    return Math.min(maximum, Math.max(1, parsed));
};

const findCategory = async (category) => {
    const filter = /^[0-9a-fA-F]{24}$/.test(category)
        ? { _id: category }
        : { slug: category };

    return await Category.findOne(filter);
};

const list = async (req, res, next) => {
    try {
        const page = parsePagination(req.query.page, 1, 1000);
        const limit = parsePagination(req.query.limit, 12, 100);
        const filter = { status: 'active' };

        if (req.query.search) {
            const search = String(req.query.search).trim();
            if (search) {
                filter.$or = [
                    { title: { $regex: escapeRegex(search), $options: 'i' } },
                    { description: { $regex: escapeRegex(search), $options: 'i' } },
                    { tags: { $regex: escapeRegex(search), $options: 'i' } }
                ];
            }
        }

        if (req.query.category) {
            const category = await findCategory(String(req.query.category).trim());
            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: 'Category not found'
                });
            }
            filter.category = category._id;
        }

        const sortMap = {
            newest: { createdAt: -1 },
            price_asc: { price: 1 },
            price_desc: { price: -1 },
            title_asc: { title: 1 },
            title_desc: { title: -1 }
        };
        const sort = sortMap[req.query.sort] || { createdAt: -1 };
        const [products, total] = await Promise.all([
            Product.find(filter)
                .populate('category', 'name slug type')
                .sort(sort)
                .skip((page - 1) * limit)
                .limit(limit),
            Product.countDocuments(filter)
        ]);

        res.status(200).json({
            success: true,
            data: {
                products,
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

const getBySlug = async (req, res, next) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug, status: 'active' })
            .populate('category', 'name slug type');

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const payload = { ...req.validatedProduct };
        const category = await Category.findOne({ _id: payload.category, isActive: true });

        if (!category) {
            return res.status(400).json({
                success: false,
                message: 'Product category is invalid or inactive'
            });
        }

        const product = await Product.create(payload);
        const populatedProduct = await Product.findById(product._id).populate('category', 'name slug type');

        res.status(201).json({
            success: true,
            data: populatedProduct
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: 'A product with this slug already exists'
            });
        }
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        const payload = { ...req.validatedProduct };

        if (payload.category) {
            const category = await Category.findOne({ _id: payload.category, isActive: true });
            if (!category) {
                return res.status(400).json({
                    success: false,
                    message: 'Product category is invalid or inactive'
                });
            }
        }

        if (payload.slug && payload.slug !== product.slug) {
            const existing = await Product.findOne({ slug: payload.slug, _id: { $ne: product._id } });
            if (existing) {
                return res.status(409).json({
                    success: false,
                    message: 'A product with this slug already exists'
                });
            }
        }

        Object.assign(product, payload);
        await product.save();
        const populatedProduct = await Product.findById(product._id).populate('category', 'name slug type');

        res.status(200).json({
            success: true,
            data: populatedProduct
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: 'A product with this slug already exists'
            });
        }
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    list,
    getBySlug,
    create,
    update,
    remove
};
