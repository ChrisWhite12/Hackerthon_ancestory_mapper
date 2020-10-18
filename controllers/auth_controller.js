const UserModel = require("../models/user")
const passport = require('passport')

const registerNew = (req,res) => {
    res.render('auth/register')
}

const registerCreate = (req,res) => {
    // res.json(req.body)
    // const {email, password} = req.body
    // const user = await UserModel.create({
    //     email,
    //     password
    // })
    // req.session.user = user
    // console.log(req.session.user)
    // res.redirect("/dashboard")
    const newUserHandler = (user) => {
        req.login(user, (err) => {
            if(err){
                next(err)
            }
            else{
                res.redirect('/dashboard')
            }

        })
    }

    const {email,password} = req.body
    UserModel.create({
        email,
        password
    })
    .then(newUserHandler)
    

}

const logOut = (req,res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}

const loginNew = (req,res) => {
    res.render("auth/login")
}

const loginCreate = (req,res, next) => {
    // // res.json(req.body)
    // const {email,password} = req.body;
    // const user = await UserModel.findOne({email})
    // //fetch the user
    // if(!user){
    //     return res.render("auth/login", {error: "invaild email or password"})
    // }
    // else{
    //     //verify password
    //     const validpass = await user.verifyPassword(password)
    //     if(!validpass){
    //         return res.render("auth/login", {error: "invaild email or password"})
    //     }
    // }
    const loginFunc = passport.authenticate('local', {
       successRedirect: "/dashboard",
       failureRedirect: "/user/login"
    })
    loginFunc(req, res, next)
    

    // req.session.user = user
    // res.redirect('/dashboard')
}

module.exports = {
    registerNew,
    registerCreate,
    logOut,
    loginCreate,
    loginNew
}