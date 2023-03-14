"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("departments", "userid", {
        type: Sequelize.UUID,
        allowNull: false,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("departments", "userid", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },
};
