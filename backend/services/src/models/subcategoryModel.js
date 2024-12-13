const { DataTypes, Model } = require('sequelize');
const { sequelizeService } = require('../../config/database');
const Category = require('../models/categoryModel');  // Assuming Category model exists

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
      // Removed the `references` and constraints
    },
    subcategory_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize:sequelizeService,
    modelName: 'Subcategory',
    tableName: 'subcategories',  // This is your table name
    timestamps: true,  // Enables createdAt and updatedAt fields
  }
);

// Define the association between Subcategory and Category (without foreign key in the database)
Subcategory.belongsTo(Category, {
  foreignKey: 'CategoryId', // Still define the relationship at the model level
  as: 'category',  // Alias for the association
  onDelete: 'CASCADE', // Ensure cascading delete behavior (this is only for the model relationship, not the DB constraint)
});

module.exports = Subcategory;
