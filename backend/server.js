const app = require('./src/app');
const connectDB = require('./src/config/db');
const { getPort, getApiBaseUrl } = require('./src/config/env');
require('dotenv').config();

const PORT = getPort();
const API_BASE_URL = getApiBaseUrl(PORT);

connectDB().catch((err) => {
    console.error('Database connection failed:', err.message);
});

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    console.log(`API base URL: ${API_BASE_URL}`);
});
