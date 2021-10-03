const errorTypes = require('../constants/error-types.js')
const service = require("../service/user.service.js")
const md5Password = require("../utils/password-handle")
const verifyLogin = async (ctx,next) =>{
    //1.获取用户名和密码
    const {name,password} = ctx.request.body
    //2.判断用户名密码是否为空
    if(!name || !password){
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }
    //3.判断用户是否存在
    const result = await service.getUserByName(name)
    const user = result[0]
    //console.log(result);
    if(!user){
        //console.log(1)
        const error = new Error(errorTypes.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error',error,ctx)
    }
    //4.判断面是否一致(加密)
    if(md5Password(password) !== user.password){
        const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
        return ctx.app.emit('error',error,ctx)
    }
    await next()
}
module.exports = {verifyLogin}