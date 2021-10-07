const jwt = require('jsonwebtoken')

const errorTypes = require('../constants/error-types.js')
const service = require("../service/user.service.js")
const md5Password = require("../utils/password-handle")
const {PUBLIC_KEY, PRIVATE_KEY} = require("../app/config")
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
    ctx.user = user
    await next()
}
const  verifyAuth = async (ctx,next) =>{
    //console.log("验证授权的middleware")
    //1.获取token
    const authorization = ctx.headers.authorization;
    //如果authorization为空进行判断
    if(!authorization){
        const error = new Error(errorTypes.UNAUTHORIZATION)
        return ctx.emit('error',error,ctx)
    }
    const token = authorization.replace('Bearer ','')
    //2.验证token 验证成功就是之间携带的id name
 try {
    const result =  jwt.verify(token,PRIVATE_KEY,{
        algorithms:['RS256']
    })
    ctx.user = result
    await next()
 }catch(err){
     //console.log(1)
     const error = new Error(errorTypes.UNAUTHORIZATION)
    ctx.app.emit('error',error,ctx)
 }
}
module.exports = {verifyLogin,verifyAuth }