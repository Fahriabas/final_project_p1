const { User, Course } = require('../models')

class Controller{
    static home(req, res){
        // res.send('ini home')
        User.findAll().then((response) => {
            res.render('home' , response)
        })
        
    }
    // static createUser(req, res){
    //     // res.send('form create User')
    //     const {username , password} = req.body
    //     User.create({
    //         username,password
    //     }).then((response) => {
    //         res.render('create-user' , response)
    //     }).catch((e) => {
    //         console.log(e);
    //         res.render('create-user' , e)
    //     })

        
    // }
    // static loginUser(req, res){
    //     // res.send('tempat login user')

    //     res.render('login')
    // }
    // static homeUser(req, res){
    //     // res.send('homeUser')
    //     res.render('home-user')
    // }

    // static logout (req, res){
    //     req.session.destroy ((err) => {
    //         if (err) res.send (err)
    //         else {
    //             res.redirect 
    //         }
    //     })
    // }


    static addForm(req,res){
        res.render('add-form')

    }

    static addCourse(req, res){
        // console.log(req.body);
        const { name, description, category } = req.body
        Course.create({
            name, description, category
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            req.send(err)
        })
    }

    // static deleteCourseById(req, res){
    //     const{} = req.params
    //     const{id} = req.params
    //     User.destroy({where:{UserId : id}})
    //     .then(result=>{
    //         return Post.destroy({where:{id:UserId}})
    //     })
    //     .then(result=>{
    //         res.redirect('/courses')
    //     })
    //     .catch(err =>{
    //         // console.log(err)
    //         res.send(err)
    //     })
    // }

}

module.exports = Controller