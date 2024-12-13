const express = require('express');
const router = express.Router();
const {
    getAllCurrencies,
    getCurrencyByCode,
    updateCurrency,
    deleteCurrency,
    getCurrencyById
} = require('../controllers/currencyController');

router.get('/', getAllCurrencies);
router.get('/:currencycode', getCurrencyByCode); 
router.put('/:currencycode', updateCurrency);
router.get('/list/:id', getCurrencyById);
router.delete('/:currencycode', deleteCurrency);

module.exports = router;