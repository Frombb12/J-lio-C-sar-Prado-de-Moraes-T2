"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Contatos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Fone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Email: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Contatos");
  },
};
