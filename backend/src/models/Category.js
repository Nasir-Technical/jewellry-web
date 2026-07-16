const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        image: {
            type: String
        },
        type: {
            type: String,
            required: true,
            enum: ['Retail', 'Wholesale']
        },
        parentCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            default: null
        },
        isActive: {
            type: Boolean,
            default: true
        },
        sortOrder: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

// Auto-generate slug from name if not provided
categorySchema.pre('validate', function (next) {
    if (this.name && !this.slug) {
        this.slug = this.name
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-');
    }
    next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
