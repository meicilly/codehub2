const app = require("./app/index")
//const config = require("./app/config")
require('./app/database.js')

app.listen(8888,()=>{
    console.log("服务器启动成功")
})