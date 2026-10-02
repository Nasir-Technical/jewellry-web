const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { API_PREFIX } = require('./config/env');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
const apiRouter = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(API_PREFIX, apiRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
