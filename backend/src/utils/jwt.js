const jwt = require('jsonwebtoken');
const { getJwtSecret } = require('../config/env');

const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        getJwtSecret(),
        { expiresIn: '15m' }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user._id },
        getJwtSecret(),
        { expiresIn: '7d' }
    );
};

const verifyAccessToken = (token) => {
    let secret;

    try {
        secret = getJwtSecret();
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
};

const verifyRefreshToken = (token) => {
    let secret;

    try {
        secret = getJwtSecret();
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken
};
