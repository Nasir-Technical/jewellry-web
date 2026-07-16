const express = require('express');
const router = express.Router();
const healthRouter = require('./health');
const authRouter = require('./auth');
const categoryRouter = require('./category');

router.use('/health', healthRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);

module.exports = router;
