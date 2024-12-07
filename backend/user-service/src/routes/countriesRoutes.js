const express = require("express");
const {
    getAllCountries,
    updateCountryById,
    getCountryById,
    deleteCountryById,
    
} = require("../controllers/countriesController");

const router = express.Router();

router.get("/", getAllCountries);
router.get("/:id", getCountryById);
router.put("/:id", updateCountryById);
router.delete("/:id", deleteCountryById);

module.exports = router;