'use strict';

const {
  Model
} = require('sequelize');
const nodemailer = require ('nodemailer')
module.exports = (sequelize, DataTypes) => {
  const { hashPassword } = require('../helpers/bcrypt');
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile)
      User.hasMany(models.Course)
      User.hasMany(models.Transaction)
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    validate: {
      emailNotEmpty() {
        if (!this.email) {
          throw new Error('Email cannot be empty');
        }
      },
      passwordNotEmpty() {
        if (!this.password) {
          throw new Error('Password cannot be empty');
        }
      }
    }
  });
  User.beforeCreate((user, options) => {
    if (user.password) {
      user.password = hashPassword(user.password);
    }
  });
  User.afterCreate ((user) => {
    console.log('line 52');
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth:{
        user: "pairprojecthacktiv8@gmail.com",
        pass: "cookiemonster77"
      }
    })

    const options = {
      from: "pairprojecthacktiv8@gmail.com",
      to: user.email,
      subject: "Sending email with node",
      text: "Your registration has been successful"
    }

    transporter.sendMail(options, (err, info) =>{
      if(err){
        console.log(err)
        return
      }
      console.log("Sent: " + info.response)
    })
  })
  return User;
};