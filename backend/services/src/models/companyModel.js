const { DataTypes, Model } = require('sequelize');
const { sequelizeService } = require('../../config/database');

class CompanyModel extends Model {}

CompanyModel.init({
    userId:{
        type: DataTypes.STRING,      
        allowNull: false, 
    },
    companyName: {
        type: DataTypes.STRING,      
        allowNull: false,           
    },
    organisationNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country:{
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
    countiesCoverage: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    ProjectManagerRoleId: {
        type: DataTypes.JSON,
        allowNull: false,
    },
}, {
    sequelize:sequelizeService,                
    modelName: 'CompanyModel',     
    tableName: 'Companies',        
    timestamps: true,               
});

module.exports = CompanyModel;       
