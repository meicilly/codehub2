const Router = require("koa-router")

const {
    create,
    detail
} = require("../controller/moment.controll")

const momenRouter = new Router({prefix:"/moment"})

const {
    verifyAuth
} = require('../middleware/auth.middleware')

momenRouter.post('/',verifyAuth,create)
momenRouter.get('/:momentId',detail)

module.exports = momenRouter