const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { validateCreate, validateUpdate } = require('../validators/categoryValidator');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

// Public routes
router.get('/', categoryController.list);
router.get('/:slug', categoryController.getBySlug);

// Admin-only protected CRUD routes
router.post('/', protect, authorize('admin'), validateCreate, categoryController.create);
router.put('/:id', protect, authorize('admin'), validateUpdate, categoryController.update);
router.delete('/:id', protect, authorize('admin'), categoryController.softDelete);

module.exports = router;
