const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const orderController = require('../controllers/orderController');
const { validateOrder } = require('../validators/orderValidator');

const router = express.Router();

router.use(protect);
router.post('/', validateOrder, orderController.create);
router.get('/my-orders', orderController.myOrders);

module.exports = router;
