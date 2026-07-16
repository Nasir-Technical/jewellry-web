const User = require('../models/User');
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require('../utils/jwt');

const register = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists with this email');
    }

    const user = await User.create({ name, email, password });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    const userResponse = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    };

    return { user: userResponse, accessToken, refreshToken };
};

const login = async (email, password) => {
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid email or password');
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    const userResponse = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    };

    return { user: userResponse, accessToken, refreshToken };
};

const refreshSession = async (token) => {
    if (!token) {
        throw new Error('Refresh token is required');
    }

    const decoded = verifyRefreshToken(token);
    if (!decoded) {
        throw new Error('Invalid or expired refresh token');
    }

    const user = await User.findById(decoded.id);
    if (!user) {
        throw new Error('User not found');
    }

    // Retrieve user with refresh token to compare (since it is excluded by default in query selects)
    const userWithToken = await User.findById(decoded.id).select('+refreshToken');
    if (!userWithToken || userWithToken.refreshToken !== token) {
        throw new Error('Invalid refresh token');
    }

    const accessToken = generateAccessToken(userWithToken);
    const newRefreshToken = generateRefreshToken(userWithToken);

    userWithToken.refreshToken = newRefreshToken;
    await userWithToken.save();

    const userResponse = {
        id: userWithToken._id,
        name: userWithToken.name,
        email: userWithToken.email,
        role: userWithToken.role
    };

    return { user: userResponse, accessToken, refreshToken: newRefreshToken };
};

const logout = async (userId) => {
    const user = await User.findById(userId);
    if (user) {
        user.refreshToken = undefined;
        await user.save();
    }
};

module.exports = {
    register,
    login,
    refreshSession,
    logout
};
