const API_PREFIX = '/api/v1';
const DEFAULT_PORT = 5000;

const getPort = (value = process.env.PORT) => {
    const port = Number(value ?? DEFAULT_PORT);

    if (!Number.isInteger(port) || port < 1 || port > 65535) {
        throw new Error(`Invalid PORT value: ${value}`);
    }

    return port;
};

const getApiBaseUrl = (port = getPort()) => {
    return (process.env.API_BASE_URL || `http://localhost:${port}${API_PREFIX}`).replace(/\/+$/, '');
};

const getJwtSecret = () => {
    if (process.env.JWT_SECRET) {
        return process.env.JWT_SECRET;
    }

    const environment = process.env.NODE_ENV || 'development';

    if (environment !== 'development') {
        throw new Error('JWT_SECRET is required in non-development environments');
    }

    return 'local-development-jwt-secret';
};

module.exports = {
    API_PREFIX,
    DEFAULT_PORT,
    getPort,
    getApiBaseUrl,
    getJwtSecret
};
