"use strict";
const {v4} = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: v4(),
          name: "User",
        },
        {
          id: v4(),
          name: "Admin",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles");
  },
};
