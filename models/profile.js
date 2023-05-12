'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }
  }
  Profile.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
    validate: {
      nameNotEmpty() {
        if (!this.name) {
          throw new Error('Name cannot be empty');
        }
      },
      locationNotEmpty() {
        if (!this.gender) {
          throw new Error('Gender cannot be empty');
        }
      },
      imageUrlValid() {
        if (!/^https?:\/\/.+/.test(this.imageUrl)) {
          throw new Error('Profile image URL must start with http:// or https://');
        }
      }
    }
  });
  return Profile;
};