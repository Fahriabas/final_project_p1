const express = require('express')
const Controller = require('../controllers/controller')
const Router = express.Router()


Router.get('/', Controller.home)
Router.post('/create-user', Controller.createUser)
Router.post('/user/login', Controller.loginUser)
Router.post('/user/home', Controller.homeUser)

module.exports = Router