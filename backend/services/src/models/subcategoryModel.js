const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/database');
const Category = require('../models/categoryModel');
class Subcategory extends Model {}

Subcategory.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      onUpdate: 'CASCADE', 
      onDelete: 'CASCADE', 
    },
  },
  {
    sequelize, 
    modelName: 'Subcategory',
    timestamps: true,
    tableName: 'subcategories', 
  }
);

// Define the association between Subcategory and Category
Subcategory.belongsTo(Category, { foreignKey: 'CategoryId', as: 'category' });

module.exports = Subcategory;
