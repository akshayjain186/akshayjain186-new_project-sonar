const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/database');  

class Role extends Model {}

Role.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
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
  permissions: {
    type: DataTypes.TEXT, 
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  sequelize,
  modelName: 'Role', 
  tableName: 'roles', 
  timestamps: true, 
});

module.exports = Role;
