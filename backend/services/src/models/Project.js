const { DataTypes, Model } = require('sequelize');
const { sequelizeService } = require('../../config/database');

class SmallProject extends Model {}

SmallProject.init(
  {
    userId:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_of_project: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    subcategory_id: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    projectmanagerole_id: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize:sequelizeService,
    modelName: 'SmallProject',
    tableName: 'small_projects', 
    timestamps: true, 
  }
);

module.exports = SmallProject;
