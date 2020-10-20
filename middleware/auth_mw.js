// const authRedirect = (req,res,next) => {
//     if(req.session && req.session.user){
//         return res.redirect("/people/all")
//     }
//     return next()
// }

// function authorize(req,res,next){
//     if(req.user){
//         return next()
//     }else{
//         res.redirect("/people/all")
//     }
// }

// module.exports = {
//     authRedirect
// }

const authRedirect = (req, res, next) => {
    if (req.user) {
        res.redirect('/people/all')
    } else {
        // Next points to the next piece of code that should be executed, another middleware maybe
        // or controller for the route
        return next()
    }
}

function authorise(req, res, next) {
    if (req.user) {
        return next();
    } else {
        return res.redirect("/");
    }
}

module.exports = {
    authRedirect,
    authorise
}