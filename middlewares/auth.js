const isloggedIn = function (req, res, next) {
    console.log(req.session.userId, req.session.id);
    // console.log(req.session, ' ini di middle ware isloggedIn')
    if (!req.session.user) {
        const error = 'Please login first'
        res.redirect (`?error=${error}`)
    } else {
        next ()
    }
}

const isInstructor = function (req, res, next){
    // console.log(req.session, ' ini di middle ware isInstructor')

    if (req.session.user && req.session.user.role !== 'instructor'){
        const error = 'You have no access'
        res.redirect (`login?error=${error}`)
    } else {
        next ()
    }
}

module.exports = {isloggedIn, isInstructor}