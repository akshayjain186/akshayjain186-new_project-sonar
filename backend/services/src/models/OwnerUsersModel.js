const { DataTypes, Model } = require('sequelize');
const { sequelizeService } = require('../../config/database');

class OwnerUser extends Model {}

OwnerUser.init(
    {
      userId:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyId:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
        sequelize:sequelizeService,
        modelName:'OwnerUser',
        tableName:'OwnerUser',
        timestamps: true, 
    }
);

module.exports = OwnerUser;