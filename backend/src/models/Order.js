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

const orderItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            trim: true,
            default: ''
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        unitPrice: {
            type: Number,
            required: true,
            min: 0
        },
        selectedVariant: {
            type: selectedVariantSchema,
            default: null
        }
    },
    { _id: false }
);

const shippingAddressSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        phone: {
            type: String,
            trim: true,
            default: ''
        },
        line1: {
            type: String,
            required: true,
            trim: true
        },
        line2: {
            type: String,
            trim: true,
            default: ''
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        postalCode: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        }
    },
    { _id: false }
);

const paymentInfoSchema = new mongoose.Schema(
    {
        status: {
            type: String,
            enum: ['pending', 'authorized', 'captured', 'failed', 'refunded'],
            default: 'pending'
        },
        transactionId: {
            type: String,
            trim: true,
            default: ''
        },
        method: {
            type: String,
            trim: true,
            default: 'pending'
        }
    },
    { _id: false }
);

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        orderNumber: {
            type: String,
            required: true,
            unique: true
        },
        items: {
            type: [orderItemSchema],
            required: true,
            validate: {
                validator: (items) => items.length > 0,
                message: 'Order must contain at least one item'
            }
        },
        shippingAddress: {
            type: shippingAddressSchema,
            required: true
        },
        paymentInfo: {
            type: paymentInfoSchema,
            default: () => ({ status: 'pending', transactionId: '', method: 'pending' })
        },
        orderStatus: {
            type: String,
            enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
            default: 'pending'
        },
        subtotal: {
            type: Number,
            required: true,
            min: 0
        },
        tax: {
            type: Number,
            required: true,
            min: 0
        },
        shippingCost: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },
        total: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

orderSchema.index({ user: 1, createdAt: -1 });
orderSchema.index({ orderNumber: 1 }, { unique: true });
orderSchema.index({ orderStatus: 1, createdAt: -1 });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
