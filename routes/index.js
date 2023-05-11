const express = require('express')
const Controller = require('../controllers/controller')
const UserController = require('../controllers/user-controller')
const Router = express.Router()
const { isloggedIn , isInstructor} = require('../middlewares/auth')
// const Router = express.Router()


//menampilkan halaman home
Router.use((req,res,next) => {
    console.log(req.session , 'fahri');
    next()
})
Router.get('/', Controller.home)


//register form
Router.get('/register', UserController.registerForm)

// post-register
Router.post('/register', UserController.postRegister)



Router.get('/login', UserController.loginForm)

//post login
Router.post('/login', UserController.postLogin)

Router.use(isloggedIn)
// Router.use(isInstructor)

//menampilkan all courses
Router.get('/courses', UserController.showCourses)



//menambahkan courses
Router.get('/courses/add', Controller.addForm)
Router.post('/courses/add', Controller.addCourse)



Router.get('/course/:id', UserController.detailcourse)
Router.get('/courses/:id/buy', UserController.buyCourses)

Router.use(isInstructor)
//delete course by id
Router.get('/course/:id/delete', Controller.deleteCourseById)


//edit course form
Router.get('/course/:id/edit', Controller.editCourseForm)





// Router.get('/courses/:id', UserController.detailcourse)

// Router.get('/logout', Controller.logout)
// Router.get('/course/add', Controller.addForm)
// Router.post('/course/add', Controller.addCourse)
/*


Router.get('/home', Controller.home)
Router.get('/courses', Controller.courseList)
Router.get('/course/add', Controller.addcourseForm)
Router.post('/course/add', Controller.addcourse)
Router.get('/course/:id', Controller.courseDetail)
Router.get('/course/:id/buy', Controller.showBuyForm)
Router.post('/course/:id/buy', Controller.submitBuyForm)



Router.use(isInstructor)
Router.get('/course/:id/edit', Controller.editCourseForm)
Router.post('/course/:id/edit', Controller.updateCourseForm)

*/
/*
router.get("/", Controller.showLogin)
router.post("/", Controller.checkLogin)
router.get("/register", Controller.showRegisterForm);
router.post("/register", Controller.registerUser);

*/ 









// Router.post('/create-user', Controller.createUser)
// Router.post('/user/login', Controller.loginUser)
// Router.post('/user/home', Controller.homeUser)

// const isLogin = function(req, res, next){
//     console.log(req.session);

//     if(!req.session.userId){
//         const error = 'please login first'
//         res.redirect(`/login?error=${error}`)
//     } else {
//         next()
//     }
// }

// const isInstructor = function(req, res, next){
//     console.log(req.session);
//     if(req.session.userId && req.session.role !== 'Instructor'){
//         const error = 'you have no acsess'
//     } else {
//         next()
//     }
// }



module.exports = Router