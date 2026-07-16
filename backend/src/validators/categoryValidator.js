const validateCreate = (req, res, next) => {
    const { name, type } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        res.status(400);
        return next(new Error('Invalid name: name is required'));
    }

    if (!type || !['Retail', 'Wholesale'].includes(type)) {
        res.status(400);
        return next(new Error('Invalid type: must be Retail or Wholesale'));
    }

    next();
};

const validateUpdate = (req, res, next) => {
    const { name, type } = req.body;

    if (name !== undefined && (typeof name !== 'string' || name.trim().length === 0)) {
        res.status(400);
        return next(new Error('Invalid name: name cannot be empty'));
    }

    if (type !== undefined && !['Retail', 'Wholesale'].includes(type)) {
        res.status(400);
        return next(new Error('Invalid type: must be Retail or Wholesale'));
    }

    next();
};

module.exports = {
    validateCreate,
    validateUpdate
};
