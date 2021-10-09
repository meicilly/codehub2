const Router = require("koa-router")

const {
    create,
    detail,
    update,
    remove
} = require("../controller/moment.controll")

const momenRouter = new Router({prefix:"/moment"})

const {
    verifyAuth,
    verifyPermission
} = require('../middleware/auth.middleware')

momenRouter.post('/',verifyAuth,create)
momenRouter.get('/:momentId',detail)
//用于删除动态 用户是登录的 验证token
momenRouter.patch('/:momentId',verifyAuth,verifyPermission,update)
momenRouter.delete('/:momentId',verifyAuth,verifyPermission,remove)
module.exports = momenRouter