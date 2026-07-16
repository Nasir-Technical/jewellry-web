const Category = require('../models/Category');

const createCategory = async (categoryData) => {
    const { name, slug } = categoryData;

    let targetSlug = slug;
    if (!targetSlug && name) {
        targetSlug = name
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-');
    }

    const existingCategory = await Category.findOne({ slug: targetSlug });
    if (existingCategory) {
        throw new Error('Category already exists with this slug');
    }

    const category = new Category(categoryData);
    if (targetSlug) {
        category.slug = targetSlug;
    }
    return await category.save();
};

const getCategories = async (query = {}) => {
    const filter = { isActive: true, ...query };
    return await Category.find(filter)
        .populate('parentCategory', 'name slug')
        .sort({ sortOrder: 1, name: 1 });
};

const getCategoryBySlug = async (slug) => {
    const category = await Category.findOne({ slug, isActive: true })
        .populate('parentCategory', 'name slug');

    if (!category) {
        throw new Error('Category not found');
    }
    return category;
};

const updateCategory = async (id, updateData) => {
    const category = await Category.findById(id);
    if (!category) {
        throw new Error('Category not found');
    }

    if (updateData.slug && updateData.slug !== category.slug) {
        const existing = await Category.findOne({ slug: updateData.slug });
        if (existing) {
            throw new Error('Category already exists with this slug');
        }
    }

    Object.assign(category, updateData);
    return await category.save();
};

const softDeleteCategory = async (id) => {
    const category = await Category.findById(id);
    if (!category) {
        throw new Error('Category not found');
    }

    category.isActive = false;
    return await category.save();
};

module.exports = {
    createCategory,
    getCategories,
    getCategoryBySlug,
    updateCategory,
    softDeleteCategory
};
