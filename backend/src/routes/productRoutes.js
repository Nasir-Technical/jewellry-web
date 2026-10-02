const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const productController = require('../controllers/productController');
const { validateCreateProduct, validateUpdateProduct } = require('../validators/productValidator');

const router = express.Router();

router.get('/', productController.list);
router.get('/:slug', productController.getBySlug);
router.post('/', protect, authorize('admin'), validateCreateProduct, productController.create);
router.put('/:id', protect, authorize('admin'), validateUpdateProduct, productController.update);
router.delete('/:id', protect, authorize('admin'), productController.remove);

module.exports = router;
