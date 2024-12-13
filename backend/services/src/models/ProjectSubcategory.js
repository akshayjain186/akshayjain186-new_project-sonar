const { DataTypes, Model } = require('sequelize');
const { sequelizeService } = require('../../config/database');

class ProjectSubcategory extends Model {}

ProjectSubcategory.init(
  {
    subcategory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    smallProject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    attachment: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    floor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize:sequelizeService,
    modelName: 'ProjectSubcategory',
    tableName: 'project_subcategories',
    timestamps: true,
  }
);

module.exports = ProjectSubcategory;
