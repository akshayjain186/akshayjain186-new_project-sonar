const { DataTypes, Model } = require('sequelize');
const { sequelizeService } = require('../../config/database');

class UserserviceInfo extends Model {}

UserserviceInfo.init({
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    typeOfHome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    generalComment: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize:sequelizeService,
    modelName: 'UserserviceInfo',
    tableName: 'Userserviceinfo',
    timestamps: true,
});

module.exports = UserserviceInfo;
