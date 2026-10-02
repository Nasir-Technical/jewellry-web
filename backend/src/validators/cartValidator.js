const mongoose = require('mongoose');

const isValidObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

const parseQuantity = (value) => {
    const quantity = Number(value);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100) {
        throw new Error('Quantity must be an integer between 1 and 100');
    }

    return quantity;
};

const validateSelectedVariant = (variant) => {
    if (variant === null || variant === undefined || variant === '') {
        return null;
    }

    if (typeof variant !== 'object' || Array.isArray(variant)) {
        throw new Error('Selected variant must be an object');
    }

    return {
        id: typeof variant.id === 'string' ? variant.id.trim() : '',
        label: typeof variant.label === 'string' ? variant.label.trim() : '',
        value: typeof variant.value === 'string' ? variant.value.trim() : '',
        metadata: variant.metadata ?? null
    };
};

const validateCartMutation = (req, res, next, { requireQuantity = true } = {}) => {
    try {
        const body = req.body || {};
        const payload = {};
        const hasIdentifier = body.productId !== undefined || body.itemId !== undefined;

        if (!hasIdentifier) {
            throw new Error('productId or itemId is required');
        }

        if (body.productId !== undefined) {
            if (!isValidObjectId(body.productId)) {
                throw new Error('productId must be a valid ObjectId');
            }
            payload.productId = body.productId;
        } else {
            if (!isValidObjectId(body.itemId)) {
                throw new Error('itemId must be a valid ObjectId');
            }
            payload.itemId = body.itemId;
        }

        if (body.quantity !== undefined) {
            payload.quantity = parseQuantity(body.quantity);
        } else if (requireQuantity) {
            throw new Error('Quantity is required');
        }

        if (body.selectedVariant !== undefined) {
            payload.selectedVariant = validateSelectedVariant(body.selectedVariant);
        }

        req.validatedCart = payload;
        next();
    } catch (error) {
        res.status(400);
        next(error);
    }
};

const validateAddToCart = (req, res, next) => validateCartMutation(req, res, next, { requireQuantity: true });
const validateUpdateCart = (req, res, next) => validateCartMutation(req, res, next, { requireQuantity: true });
const validateRemoveFromCart = (req, res, next) => validateCartMutation(req, res, next, { requireQuantity: false });

module.exports = {
    validateAddToCart,
    validateUpdateCart,
    validateRemoveFromCart
};
