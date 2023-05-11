'use strict';
const fs = require('fs')
let transactions = JSON.parse(fs.readFileSync('./data/transactions.json', 'utf-8')).map(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
  return el
})
console.log(transactions);

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
   return queryInterface.bulkInsert("Transactions", transactions, {})
  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Transactions", null, {})
  }
};
