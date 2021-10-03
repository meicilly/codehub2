const  Router = require('koa-router')
const {create} = require("../controller/user.controller.js")
const userRouter = new Router({prefix:'/users'})
const {
    verifyUser,
    handlePassword
} = require("../middleware/user.middware.js")
userRouter.post('/',verifyUser,handlePassword,create)


module.exports = userRouter