const express = require('express');
const {
  createSubcategory,
  getAllSubcategory,
  getSubcategory,
  updateSubcategory,
  deleteSubcategory,
} = require('../controllers/SubcategoriesController');

const router = express.Router();

router.post('/add', createSubcategory);
router.get('/list', getAllSubcategory);
router.get('/:id', getSubcategory);
router.put('/:id', updateSubcategory);
router.delete('/:id', deleteSubcategory);

module.exports = router;
