
const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../config/database'); 
const UserInfo = require('../models/userInfoModel');
class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_no: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    roleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize, 
    modelName: 'User', 
    tableName: 'Users', 
    timestamps: true, 
  }
);

User.hasOne(UserInfo, { foreignKey: 'userId', as: 'userInfo' });

module.exports = User;
