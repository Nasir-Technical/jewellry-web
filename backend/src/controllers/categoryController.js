const categoryService = require('../services/categoryService');

const create = async (req, res, next) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json({
            success: true,
            data: category
        });
    } catch (error) {
        res.status(400);
        next(error);
    }
};

const list = async (req, res, next) => {
    try {
        const query = {};
        if (req.query.type) {
            query.type = req.query.type;
        }
        if (req.query.parentCategory) {
            query.parentCategory = req.query.parentCategory === 'null' ? null : req.query.parentCategory;
        }

        const categories = await categoryService.getCategories(query);
        res.status(200).json({
            success: true,
            data: categories
        });
    } catch (error) {
        next(error);
    }
};

const getBySlug = async (req, res, next) => {
    try {
        const category = await categoryService.getCategoryBySlug(req.params.slug);
        res.status(200).json({
            success: true,
            data: category
        });
    } catch (error) {
        res.status(404);
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const category = await categoryService.updateCategory(req.params.id, req.body);
        res.status(200).json({
            success: true,
            data: category
        });
    } catch (error) {
        res.status(400);
        next(error);
    }
};

const softDelete = async (req, res, next) => {
    try {
        await categoryService.softDeleteCategory(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Category deleted successfully'
        });
    } catch (error) {
        res.status(404);
        next(error);
    }
};

module.exports = {
    create,
    list,
    getBySlug,
    update,
    softDelete
};
