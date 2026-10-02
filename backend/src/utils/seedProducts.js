const fs = require('fs');
const path = require('path');
const vm = require('vm');
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Product = require('../models/Product');
const Category = require('../models/Category');

const FRONTEND_PRODUCTS_PATH = path.resolve(__dirname, '../../../frontend/src/data/products.js');

const slugify = (value) => value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');

const readFrontendProducts = () => {
    const source = fs.readFileSync(FRONTEND_PRODUCTS_PATH, 'utf8');
    const match = source.match(/export const PRODUCTS = (\[[\s\S]*?\n\]);/);

    if (!match) {
        throw new Error(`Unable to locate PRODUCTS in ${FRONTEND_PRODUCTS_PATH}`);
    }

    const context = Object.create(null);
    return vm.runInNewContext(`const PRODUCTS = ${match[1]}; PRODUCTS;`, context, {
        filename: FRONTEND_PRODUCTS_PATH
    });
};

const getOrCreateCategory = async (name) => {
    const slug = slugify(name);
    let category = await Category.findOne({ slug });

    if (!category) {
        category = await Category.create({
            name,
            slug,
            description: `${name} collection`,
            type: 'Retail',
            isActive: true,
            sortOrder: 0
        });
    }

    return category;
};

const seedProducts = async ({ reset = false } = {}) => {
    await connectDB();

    if (reset) {
        await Product.deleteMany({});
        await Category.deleteMany({});
    }

    const frontendProducts = readFrontendProducts();
    const categoryCache = new Map();

    for (const sourceProduct of frontendProducts) {
        if (!categoryCache.has(sourceProduct.category)) {
            categoryCache.set(sourceProduct.category, await getOrCreateCategory(sourceProduct.category));
        }

        const category = categoryCache.get(sourceProduct.category);
        const tags = [
            sourceProduct.category,
            sourceProduct.isNew ? 'new' : '',
            sourceProduct.isBestseller ? 'bestseller' : ''
        ].filter(Boolean);

        const product = {
            title: sourceProduct.name,
            slug: sourceProduct.slug,
            description: sourceProduct.description,
            price: sourceProduct.price,
            salePrice: null,
            image: sourceProduct.image,
            images: sourceProduct.images.map((url, index) => ({
                url,
                alt: `${sourceProduct.name} view ${index + 1}`
            })),
            category: category._id,
            tags,
            inventory: {
                stock: 10,
                sku: `AUR-${String(sourceProduct.id).padStart(4, '0')}`
            },
            metal: sourceProduct.material,
            purity: '',
            status: 'active'
        };

        await Product.findOneAndUpdate(
            { slug: product.slug },
            { $set: product },
            { upsert: true, new: true }
        );
    }

    return {
        seeded: frontendProducts.length,
        reset
    };
};

if (require.main === module) {
    require('dotenv').config();

    seedProducts({ reset: process.argv.includes('--reset') })
        .then((result) => {
            console.log(`Seeded ${result.seeded} products${result.reset ? ' after reset' : ''}`);
        })
        .catch((error) => {
            console.error('Product seeding failed:', error.message);
            process.exitCode = 1;
        })
        .finally(() => {
            mongoose.connection.close();
        });
}

module.exports = {
    readFrontendProducts,
    seedProducts
};
