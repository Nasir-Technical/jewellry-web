const { verifyAccessToken } = require('../utils/jwt');

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        let decoded;

        try {
            decoded = verifyAccessToken(token);
        } catch (error) {
            return next(error);
        }

        if (decoded) {
            req.user = decoded;
            return next();
        }
        res.status(401);
        return next(new Error('Not authorized, token failed'));
    }

    res.status(401);
    return next(new Error('Not authorized, no token provided'));
};

const optionalAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return next();
    }

    if (!authHeader.startsWith('Bearer ')) {
        res.status(401);
        return next(new Error('Not authorized, invalid authorization header'));
    }

    const token = authHeader.split(' ')[1];
    let decoded;

    try {
        decoded = verifyAccessToken(token);
    } catch (error) {
        return next(error);
    }

    if (!decoded) {
        res.status(401);
        return next(new Error('Not authorized, token failed'));
    }

    req.user = decoded;
    next();
};

module.exports = { protect, optionalAuth };
