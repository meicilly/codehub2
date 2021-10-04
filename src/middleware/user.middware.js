const errorTypes = require("../constants/error-types.js")
const service = require('../service/user.service.js')
const md5Password = require("../utils/password-handle.js")
const verifyUser =async (ctx,next)=>{
    //1.获取用户名和密码
    const {name,password} = ctx.request.body;
    //console.log(name,password)
    //2.判断用户名或者密码不能为空
    if(!name || !password){
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }
    //3.判断这次用户名是没有被注册的 
    const result = await service.getUserByName(name)
    //console.log(result);
    if(result.length){
        //console.log(1)
        const error = new Error(errorTypes.USER_AREADY_EXISTS)
        return ctx.app.emit('error',error,ctx)
    }
    await next()
}

const handlePassword = async (ctx,next)=>{
    const {password} = ctx.request.body;
    //加密之后的密码

    ctx.request.body.password = md5Password(password)
    
    await next()
}

module.exports = {
    verifyUser,
    handlePassword
}