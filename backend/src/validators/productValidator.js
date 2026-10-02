const mongoose = require('mongoose');

const isValidObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

const parseNumber = (value, fieldName) => {
    const number = Number(value);

    if (!Number.isFinite(number) || number < 0) {
        throw new Error(`${fieldName} must be a non-negative number`);
    }

    return number;
};

const normalizeImages = (images) => {
    if (!Array.isArray(images)) {
        return undefined;
    }

    return images.map((entry) => {
        if (typeof entry === 'string') {
            return { url: entry, alt: '' };
        }

        if (!entry || typeof entry.url !== 'string' || !entry.url.trim()) {
            throw new Error('Each product image must include a URL');
        }

        return {
            url: entry.url.trim(),
            alt: typeof entry.alt === 'string' ? entry.alt.trim() : ''
        };
    });
};

const validateProductPayload = (req, res, next, { partial = false } = {}) => {
    try {
        const body = req.body || {};
        const payload = {};

        if (!partial || body.title !== undefined) {
            if (typeof body.title !== 'string' || !body.title.trim()) {
                throw new Error('Product title is required');
            }
            payload.title = body.title.trim();
        }

        if (body.slug !== undefined) {
            if (typeof body.slug !== 'string' || !body.slug.trim()) {
                throw new Error('Product slug must be a non-empty string');
            }
            payload.slug = body.slug
                .trim()
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]+/g, '')
                .replace(/\-\-+/g, '-');
        }

        if (!partial || body.description !== undefined) {
            if (body.description !== undefined && typeof body.description !== 'string') {
                throw new Error('Product description must be a string');
            }
            payload.description = body.description?.trim() ?? '';
        }

        if (!partial || body.price !== undefined) {
            if (body.price === undefined) {
                throw new Error('Product price is required');
            }
            payload.price = parseNumber(body.price, 'Product price');
        }

        if (body.salePrice !== undefined) {
            if (body.salePrice === null) {
                payload.salePrice = null;
            } else {
                payload.salePrice = parseNumber(body.salePrice, 'Product sale price');
            }
        }

        if (body.image !== undefined) {
            if (typeof body.image !== 'string') {
                throw new Error('Product image must be a string');
            }
            payload.image = body.image.trim();
        }

        if (body.images !== undefined) {
            payload.images = normalizeImages(body.images);
        }

        if (!partial || body.category !== undefined) {
            if (body.category === undefined) {
                throw new Error('Product category is required');
            }
            if (!isValidObjectId(body.category)) {
                throw new Error('Product category must be a valid ObjectId');
            }
            payload.category = body.category;
        }

        if (body.tags !== undefined) {
            if (!Array.isArray(body.tags) || body.tags.some((tag) => typeof tag !== 'string')) {
                throw new Error('Product tags must be an array of strings');
            }
            payload.tags = body.tags.map((tag) => tag.trim()).filter(Boolean);
        }

        if (body.inventory !== undefined) {
            if (!body.inventory || typeof body.inventory !== 'object') {
                throw new Error('Product inventory must be an object');
            }
            payload.inventory = {};
            if (body.inventory.stock !== undefined) {
                payload.inventory.stock = parseNumber(body.inventory.stock, 'Product stock');
            }
            if (body.inventory.sku !== undefined) {
                if (typeof body.inventory.sku !== 'string') {
                    throw new Error('Product SKU must be a string');
                }
                payload.inventory.sku = body.inventory.sku.trim();
            }
        }

        if (body.metal !== undefined) {
            if (typeof body.metal !== 'string') {
                throw new Error('Product metal must be a string');
            }
            payload.metal = body.metal.trim();
        }

        if (body.purity !== undefined) {
            if (typeof body.purity !== 'string') {
                throw new Error('Product purity must be a string');
            }
            payload.purity = body.purity.trim();
        }

        if (body.status !== undefined) {
            if (!['active', 'draft'].includes(body.status)) {
                throw new Error('Product status must be active or draft');
            }
            payload.status = body.status;
        }

        if (payload.salePrice !== null && payload.salePrice !== undefined && payload.price !== undefined && payload.salePrice > payload.price) {
            throw new Error('Sale price cannot be greater than the regular price');
        }

        if (partial && Object.keys(payload).length === 0) {
            throw new Error('At least one product field is required');
        }

        req.validatedProduct = payload;
        next();
    } catch (error) {
        res.status(400);
        next(error);
    }
};

const validateCreateProduct = (req, res, next) => validateProductPayload(req, res, next);
const validateUpdateProduct = (req, res, next) => validateProductPayload(req, res, next, { partial: true });

module.exports = {
    validateCreateProduct,
    validateUpdateProduct
};
