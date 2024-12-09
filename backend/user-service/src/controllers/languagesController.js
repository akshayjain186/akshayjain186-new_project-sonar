const Language = require('../models/languagesModel');
const {
  Op
} = require('sequelize');

// Get All languages
const getAllLanguages = async (req, res) => {
    try {
      const { name } = req.query; 
      const queryOptions = {};
      if (name) {
        queryOptions.where = {
          name: {
            [Op.like]: `%${name}%`, 
          },
        };
      }
      const languages = await Language.findAll(queryOptions);
      if (!languages || languages.length === 0) {
        return res.status(404).json({
          message: 'No languages found',
        });
      }
      res.status(200).json({
        message: 'Languages fetched successfully',
        languages,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching languages',
        error: error.message,
      });
    }
};

// Get language By its Id 
const getLanguageById = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const language = await Language.findByPk(id);

    if (!language) {
      return res.status(404).json({
        message: 'Language not found'
      });
    }
    res.status(200).json({
      message: 'Language fetched successfully',
      language,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching language',
      error: error.message,
    });
  }
};

// Update Language By its Id
const updateLanguage = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      name,
      code
    } = req.body;
    const language = await Language.findByPk(id);
    if (!language) {
      return res.status(404).json({
        message: 'Language not found'
      });
    }
    await language.update({
      name,
      code
    });
    res.status(200).json({
      message: 'Language updated successfully',
      language,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating language',
      error: error.message,
    });
  }
};

// Delete Language By its Id
const deleteLanguage = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const language = await Language.findByPk(id);
    if (!language) {
      return res.status(404).json({
        message: 'Language not found'
      });
    }
    await language.destroy();
    res.status(200).json({
      message: 'Language deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting language',
      error: error.message,
    });
  }
};


module.exports = {
  getAllLanguages,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
};