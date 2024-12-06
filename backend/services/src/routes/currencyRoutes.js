const express = require('express');
const router = express.Router();
const {
    getAllCurrencies,
    getCurrencyByCode,
    updateCurrency,
    deleteCurrency,
    getCurrencyById,
} = require('../controllers/currencyController');

router.get('/currency', getAllCurrencies);
router.get('/:currencycode', getCurrencyByCode);
router.put('/currency/:currencycode', updateCurrency); 
router.get('/currency/:id', getCurrencyById);
router.delete('/currency/:currencycode', deleteCurrency);

module.exports = router;