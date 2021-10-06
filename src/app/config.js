const dotenv = require("dotenv")
const fs = require("fs")
const path = require("path")
dotenv.config()
//console.log(process.env.APP_PORT)
//读取加密文件
const PRIVATE_KEY =  fs.readFileSync(path.resolve(__dirname,'./keys/private.key'));
//const PRIVATE_KEY = fs.readFileSync('src/app/keys/private.key')
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/public.key'));
module.exports = {
    APP_PORT,
    MYSQL_PORT,
    MYSQL_HOST,
    MYSQL_DATABASE,
    MYSQL_PASSWORD,
    MYSQL_USER,
} = process.env
module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY