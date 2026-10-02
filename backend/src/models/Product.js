const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
            trim: true
        },
        alt: {
            type: String,
            trim: true,
            default: ''
        }
    },
    { _id: false }
);

const inventorySchema = new mongoose.Schema(
    {
        stock: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },
        sku: {
            type: String,
            trim: true,
            default: ''
        }
    },
    { _id: false }
);

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        description: {
            type: String,
            trim: true,
            default: ''
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        salePrice: {
            type: Number,
            default: null,
            min: 0
        },
        image: {
            type: String,
            trim: true,
            default: ''
        },
        images: {
            type: [imageSchema],
            default: []
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        tags: {
            type: [String],
            default: []
        },
        inventory: {
            type: inventorySchema,
            default: () => ({ stock: 0, sku: '' })
        },
        metal: {
            type: String,
            trim: true,
            default: ''
        },
        purity: {
            type: String,
            trim: true,
            default: ''
        },
        status: {
            type: String,
            enum: ['active', 'draft'],
            default: 'active'
        }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

productSchema.index({ slug: 1 }, { unique: true });
productSchema.index({ title: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1, status: 1 });

productSchema.pre('validate', function (next) {
    if (this.title && !this.slug) {
        this.slug = this.title
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-');
    }

    if (this.salePrice !== null && this.salePrice !== undefined && this.salePrice > this.price) {
        return next(new Error('Sale price cannot be greater than the regular price'));
    }

    next();
});

productSchema.virtual('available').get(function () {
    return this.status === 'active' && this.inventory.stock > 0;
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
