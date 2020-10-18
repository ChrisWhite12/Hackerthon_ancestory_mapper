const authRedirect = (req,res,next) => {
    if(req.session && req.session.user){
        return res.redirect("/dashboard")
    }
    return next()
}

function authorize(req,res,next){
    if(req.user){
        return next()
    }else{
        res.redirect("/")
    }
}

module.exports = {
    authRedirect
}