'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Companies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      organisationNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postalcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      jobTypes: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      employeeCount: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      useSubcontractors: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      countiesCoverage: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      ProjectManagerRoleId: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Companies');
  }
};
