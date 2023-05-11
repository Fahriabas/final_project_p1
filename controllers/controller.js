const { User } = require('../models')

class Controller{
    static home(req, res){
        // res.send('ini home')
        User.findAll().then((response) => {
            res.render('home' , response)
        })
        
    }
    static createUser(req, res){
        // res.send('form create User')
        const {username , password} = req.body
        User.create({
            username,password
        }).then((response) => {
            res.render('create-user' , response)
        }).catch((e) => {
            console.log(e);
            res.render('create-user' , e)
        })

        
    }
    static loginUser(req, res){
        // res.send('tempat login user')

        res.render('login')
    }
    static homeUser(req, res){
        // res.send('homeUser')
        res.render('home-user')
    }
}

module.exports = Controller