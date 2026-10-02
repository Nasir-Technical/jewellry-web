const express = require('express');
const router = express.Router();
const healthRouter = require('./health');
const authRouter = require('./auth');
const categoryRouter = require('./category');
const productRouter = require('./productRoutes');
const cartRouter = require('./cartRoutes');
const orderRouter = require('./orderRoutes');

router.use('/health', healthRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/cart', cartRouter);
router.use('/orders', orderRouter);

module.exports = router;
