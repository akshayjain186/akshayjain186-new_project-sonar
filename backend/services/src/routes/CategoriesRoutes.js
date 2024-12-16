const express = require('express');
const {
  createCategory,
  getCategoriesDetails,
  updateCategory,
  deleteCategory,
  getCategoryById
} = require('../controllers/CategoriesController');

const router = express.Router();

router.post('/add', createCategory);
router.get('/list', getCategoriesDetails);
router.put('/:id', updateCategory);

router.get('/:id', getCategoryById); // subcategories manually for a given category
router.delete('/:id', deleteCategory);

module.exports = router;
