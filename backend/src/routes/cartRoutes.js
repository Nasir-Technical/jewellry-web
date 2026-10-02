const express = require('express');
const { optionalAuth } = require('../middleware/authMiddleware');
const cartController = require('../controllers/cartController');
const { validateAddToCart, validateUpdateCart, validateRemoveFromCart } = require('../validators/cartValidator');

const router = express.Router();

router.use(optionalAuth);
router.get('/', cartController.getCart);
router.post('/', validateAddToCart, cartController.addToCart);
router.put('/', validateUpdateCart, cartController.updateCartItem);
router.delete('/', validateRemoveFromCart, cartController.removeFromCart);

module.exports = router;
