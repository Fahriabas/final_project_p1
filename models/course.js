'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.Transaction , {
        foreignKey: 'CourseId',
        onDelete: 'cascade',
  hooks: true, 
      })
      Course.belongsTo(models.User)
    }
  }
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};