const jwt = require("jsonwebtoken")
const {PRIVATE_KEY} = require('../app/config.js')
class AuthController {
    async login(ctx,next){
        const {id,name} = ctx.user
        //console.log(PRIVATE_KEY)
        //颁发签名
        const token = jwt.sign({id,name},PRIVATE_KEY,{
            expiresIn: 60 * 60 * 24,
            algorithm: "RS256"
        })
        //console.log(ctx.user)
        //const {name} = ctx.request.body;
        //console.log(token)
        ctx.body = {id,name,token}
        
    }
}

module.exports = new AuthController()