'use strict';
const fs = require('fs')
let courses = JSON.parse(fs.readFileSync('./data/courses.json', 'utf-8')).map(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
  return el
})
console.log(courses);

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
   return queryInterface.bulkInsert("Courses", courses, {})
  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Courses", null, {})
  }
};
