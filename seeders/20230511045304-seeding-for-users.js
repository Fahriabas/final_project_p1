'use strict';
const fs = require('fs');
const { hashPassword } = require('../helpers/bcrypt');

let users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8')).map(el => {
  el.password = hashPassword(el.password)
  el.createdAt = new Date()
  el.updatedAt = new Date()
  return el
})
console.log(users); 

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
   return queryInterface.bulkInsert("Users", users)
  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users",null, {})
  }
};
