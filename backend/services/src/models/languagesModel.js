const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/database');

class Language extends Model {}

Language.init({
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,      
  modelName: 'Language', 
  timestamps: false, 
});

module.exports = Language;
