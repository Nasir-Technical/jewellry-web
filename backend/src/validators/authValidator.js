const validateRegister = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        res.status(400);
        return next(new Error('Invalid name: name is required'));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
        res.status(400);
        return next(new Error('Invalid email: please provide a valid email address'));
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
        res.status(400);
        return next(new Error('Invalid password: password must be at least 6 characters long'));
    }

    next();
};

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
        res.status(400);
        return next(new Error('Invalid email: please provide a valid email address'));
    }

    if (!password || typeof password !== 'string' || password.length === 0) {
        res.status(400);
        return next(new Error('Invalid password: password is required'));
    }

    next();
};

module.exports = {
    validateRegister,
    validateLogin
};
