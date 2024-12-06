const Currency = require('../models/currencyModel');
const { Op } = require('sequelize');
const { sequelize } = require('../../config/database');

const getAllCurrencies = async (req, res) => {
  try {
    const { search } = req.query; 
    const queryOptions = {}; 

    if (search) {
      queryOptions.where = {
        name: {
          [Op.like]: `%${search}%`, 
        },
      };
    }

    const currencies = await Currency.findAll(queryOptions);

    if (!currencies || currencies.length === 0) {
      return res.status(404).json({
        message: "No currencies found",
      });
    }
    const data = currencies.map(currency => ({
      id: currency.id,
      currencycode: currency.currencycode,
      name: currency.name,
    }));
    res.status(200).json({
      message: 'Currencies fetched successfully',
      data, 
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching currencies',
      error: error.message,
    });
  }
};

// Get a single currency by its code
const getCurrencyByCode = async (req, res) => {
  try {
    const {
      currencycode
    } = req.params;
    const currency = await Currency.findOne({
      where: {
        currencycode
      }
    });

    if (!currency) {
      return res.status(404).json({
        message: 'Currency not found'
      });
    }
    res.status(200).json({
      message: 'Currency fetched successfully',
      currency,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching currency',
      error: error.message,
    });
  }
};

const getCurrencyById = async (req, res) => {
  const { id } = req.params; 
  try {
    if (!id) {
      return res.status(400).json({
        message: 'Currency ID is required',
      });
    }
    const currency = await Currency.findByPk(id);
    if (!currency) {
      return res.status(404).json({
        message: 'Currency not found',
      });
    }
    return res.status(200).json({
      message: 'Currency fetched successfully',
      currency,
    });
  } catch (error) {
    console.error('Error fetching currency:', error.message);
    return res.status(500).json({
      message: 'Error fetching currency',
      error: error.message,
    });
  }
};

// Update a currency by its code
const updateCurrency = async (req, res) => {
  try {
    const { currencycode } = req.params; // Get currencycode from the URL params
    const { name } = req.body; // Get the name from the request body
    const currency = await Currency.findOne({
      where: { currencycode }
    });

    if (!currency) {
      return res.status(404).json({
        message: 'Currency not found'
      });
    }
    currency.name = name || currency.name; 
    await currency.save();
    res.status(200).json({
      message: 'Currency updated successfully',
      currency,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating currency',
      error: error.message,
    });
  }
};


// Delete a currency by its code
const deleteCurrency = async (req, res) => {
  try {
    const {
      currencycode
    } = req.params;
    const currency = await Currency.findOne({
      where: {
        currencycode
      }
    });
    if (!currency) {
      return res.status(404).json({
        message: 'Currency not found'
      });
    }

    await currency.destroy();
    res.status(200).json({
      message: 'Currency deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting currency',
      error: error.message,
    });
  }
};

module.exports = {
  getAllCurrencies,
  getCurrencyById,
  getCurrencyByCode,
  updateCurrency,
  deleteCurrency
};