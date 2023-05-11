
const { checkPassword } = require('../helpers/bcrypt')
const { User, Course, Transaction, Profile } = require('../models')

class UserController{
    static registerForm(req, res){
        // res.send('ini registerForm')
        res.render('register-user')
    }

    static postRegister(req, res){
        console.log(req.body)

        const {email , password, role, gender} = req.body
        User.create({
            email,password, role, gender
        })
        .then(newUser => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static loginForm(req, res){
        res.render('login')
    }

    static postLogin(req, res){
        const {email, password} = req.body
        User.findOne({where : {email}})
        .then(user => {
            console.log(user , '<<<user');

            if(user){
                const isValidPassword = checkPassword(password, user.password)//true atau false

                if(isValidPassword){
                    req.session.user = user
                    return res.redirect('/courses')

                } else {
                    const error = "invalid email/password"
                    return res.redirect(`/login?error=${error}`)
                }
            } else {
                const error = 'invalid username/password'
                return res.redirect(`/login?error=${error}`)
            }


        })
    }

    static showCourses(req, res){
        console.log(req.session.user , 'ini id yang sedang login');
        Course.findAll()
        .then(courses => {
            // res.send(courses)
            res.render('courses', {courses})
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    }

    static detailcourse(req, res){
        console.log(req.session , 'session fahri line 70');
        const { id } = req.params
        console.log(req.params);
        Course.findOne({
            where: {id}
        })
        .then(course => {
            // res.send(course)
            res.render('detail-course', {course})
        })
        .catch(err => {
            res.send(err)
            console.log(err);
        })
    }

    static buyCourses(req, res){
        console.log(req.params)
        // console.log(req.session, 'ini isinya');
        const { id } = req.params
        Transaction.create({
            id,
        })
    }
}

module.exports = UserController