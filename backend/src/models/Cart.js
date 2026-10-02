const mongoose = require('mongoose');

const selectedVariantSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            trim: true,
            default: ''
        },
        label: {
            type: String,
            trim: true,
            default: ''
        },
        value: {
            type: String,
            trim: true,
            default: ''
        },
        metadata: {
            type: mongoose.Schema.Types.Mixed,
            default: null
        }
    },
    { _id: false }
);

const cartItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        selectedVariant: {
            type: selectedVariantSchema,
            default: null
        },
        unitPrice: {
            type: Number,
            required: true,
            min: 0
        }
    }
);

const cartSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        guestSessionId: {
            type: String,
            trim: true,
            default: null
        },
        items: {
            type: [cartItemSchema],
            default: []
        },
        totalAmount: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

cartSchema.index(
    { user: 1 },
    { unique: true, partialFilterExpression: { user: { $type: 'objectId' } } }
);
cartSchema.index(
    { guestSessionId: 1 },
    { unique: true, partialFilterExpression: { guestSessionId: { $type: 'string' } } }
);

cartSchema.pre('validate', function (next) {
    if (!this.user && !this.guestSessionId) {
        return next(new Error('Cart must belong to a user or guest session'));
    }

    next();
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
