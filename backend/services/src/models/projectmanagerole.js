const { DataTypes, Model } = require('sequelize');
const { sequelizeService } = require('../../config/database');

class ProjectManagerRole extends Model {}

ProjectManagerRole.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, 
    },
  },
  machineName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize:sequelizeService,              
  modelName: 'ProjectManagerRole', 
  tableName: 'projectmanagerole', 
  timestamps: true,       
});

module.exports = ProjectManagerRole;
