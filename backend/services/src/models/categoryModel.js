const { DataTypes, Model } = require('sequelize');
const { sequelizeService } = require('../../config/database');
class Category extends Model {}

Category.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
}, {
  sequelize:sequelizeService,
  modelName: 'Category',
  timestamps: true,
  tableName: 'Categories',
});

module.exports = Category;