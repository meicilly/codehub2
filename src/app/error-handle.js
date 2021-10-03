const errorTypes = require("../constants/error-types.js")

const erroeHandle = (error,ctx)=>{
    //console.log(error.message)
    let status,message;
    switch(error.message){
        case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400;
            message = "用户名或者密码为空";
            break;
        case errorTypes.USER_AREADY_EXISTS:
            status = 409
            message = '用户名已经被注册了'
            break
        case errorTypes.USER_DOES_NOT_EXISTS:
            status = 400
            message = '用户名不存在'
            break
        case errorTypes.PASSWORD_IS_INCORRENT:
            status = 400
            message = '密码不正确错误'
            break
        default:
            status = 404;
            message = "NOT FOUND"
    }
    ctx.status = status
    ctx.body = message
}
module.exports = erroeHandle