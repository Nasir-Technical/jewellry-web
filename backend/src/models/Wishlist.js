const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true
        },
        products: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }],
            default: []
        }
    },
    {
        timestamps: true
    }
);

wishlistSchema.index({ user: 1, products: 1 });

wishlistSchema.pre('validate', function (next) {
    this.products = [...new Set(this.products.map((product) => product.toString()))];
    next();
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
