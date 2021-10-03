const koa = require('koa')
const bodyparser = require("koa-bodyparser")
const userRouter = require("../router/user.router.js")
const authRouter = require("../router/auth.router.js")
const erroeHandle = require('./error-handle.js')


const app = new koa()
app.use(bodyparser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(authRouter.routes())
app.use(authRouter.allowedMethods())

app.on('error',erroeHandle)

module.exports = app