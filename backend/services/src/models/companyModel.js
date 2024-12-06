const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/database');  

class CompanyModel extends Model {}

CompanyModel.init({
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    organisationNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postalcode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    jobTypes: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    employeeCount: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    useSubcontractors: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    countyCoverage: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    ProjectManagerRoleId: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    continentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    languageId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    currencyId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'CompanyModel',
    tableName: 'Companies',
    timestamps: true,
});

module.exports = CompanyModel;
