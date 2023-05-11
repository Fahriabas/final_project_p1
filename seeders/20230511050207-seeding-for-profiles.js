'use strict';
const fs = require('fs')
const profiles = JSON.parse(fs.readFileSync('./data/profiles.json', 'utf-8')).map(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
  return el
})
console.log(profiles);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert("Profiles", profiles, {})
  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Profiles", null, {})
  }
};
