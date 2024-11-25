const { DataTypes } = require('sequelize');
const sequelize = require ('../config/databaseConfig');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
}, {
  timestamps: true, 
  tableName: 'categories', 
});

module.exports = Category;
