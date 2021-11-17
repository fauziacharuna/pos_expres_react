'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      order_id: {
        type: Sequelize.STRING,

      },
      item_id: {
        type: Sequelize.STRING
      },
      order_price: {
        type: Sequelize.DOUBLE
      },
      order_amount: {
        type: Sequelize.INTEGER
      },
      order_total_price: {
        type: Sequelize.DOUBLE
      },
      notes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};