const express = require('express');
const router = express.Router();
const {
    getAllLanguages,
    getLanguageById,
    updateLanguage,
    deleteLanguage
} = require('../controllers/languagesController');

router.get('/list', getAllLanguages);
router.get('/:id', getLanguageById)
router.put('/:id', updateLanguage);
router.delete('/:id', deleteLanguage)

module.exports = router;