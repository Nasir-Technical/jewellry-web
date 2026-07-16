const { verifyAccessToken } = require('../utils/jwt');

const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        const token = authHeader.split(' ')[1];
        const decoded = verifyAccessToken(token);

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

module.exports = { protect };
