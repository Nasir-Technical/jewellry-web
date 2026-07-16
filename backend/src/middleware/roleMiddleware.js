const authorize = (...roles) => {
    return (req, res, next) => {
        if (req.user && roles.includes(req.user.role)) {
            return next();
        }
        res.status(403);
        return next(new Error(`Role (${req.user ? req.user.role : 'none'}) is not authorized to access this resource`));
    };
};

module.exports = { authorize };
