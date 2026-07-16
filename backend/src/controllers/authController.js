const authService = require('../services/authService');

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const result = await authService.register({ name, email, password });

        res.status(201).json({
            success: true,
            user: result.user,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken
        });
    } catch (error) {
        res.status(400);
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await authService.login(email, password);

        res.status(200).json({
            success: true,
            user: result.user,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken
        });
    } catch (error) {
        res.status(401);
        next(error);
    }
};

const refresh = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        const result = await authService.refreshSession(refreshToken);

        res.status(200).json({
            success: true,
            user: result.user,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken
        });
    } catch (error) {
        res.status(401);
        next(error);
    }
};

const logout = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        if (userId) {
            await authService.logout(userId);
        }

        res.status(200).json({
            success: true,
            message: 'Logged out successfully'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
    refresh,
    logout
};
