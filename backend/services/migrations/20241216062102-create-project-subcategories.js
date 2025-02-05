'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project_subcategories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      subcategory_id: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      smallProject_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'small_projects', 
          key: 'id',              
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      attachment: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      floor: {
        type: Sequelize.STRING,
        allowNull: true,
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
      },
    });

    await queryInterface.addIndex('project_subcategories', ['smallProject_id']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project_subcategories');
  },
};
