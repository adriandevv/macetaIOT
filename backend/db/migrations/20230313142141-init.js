'use strict';

/** @type {import('sequelize-cli').Migration} */
const { USER_TABLE, UserSchema } = require('../models/user.model');
const { MACETA_TABLE, MacetaSchema } = require('../models/maceta.model');
const { PLANTA_TABLE, PlantaSchema } = require('../models/planta.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PLANTA_TABLE, PlantaSchema);
    await queryInterface.createTable(MACETA_TABLE, MacetaSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(MACETA_TABLE);
    await queryInterface.dropTable(PLANTA_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};
