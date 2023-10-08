"use strict";
const { v4 } = require("uuid");
const bycrpt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bycrpt.genSaltSync(10);
    const adminId = await queryInterface.rawSelect(
      "roles",
      {
        where: {
          name: "admin",
        },
      },
      ["id"]
    );

    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: v4(),
          name: "Admin",
          email: "admin@email.com",
          password: bycrpt.hashSync("12345678", salt),
          role_id: adminId,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
