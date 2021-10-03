const mysql = require("mysql2")

const  {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD} = require("./config.js")
const connections =  mysql.createPool({
    host : MYSQL_HOST,
    port : MYSQL_PORT,
    user : MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
})

connections.getConnection((err,conn)=>{
    conn.connect((err)=>{
        //console.log("链接成功")
        if(err){
            console.log("链接失败")
        }else{
            console.log("数据库链接成功")
        }
    })
})

module.exports = connections.promise()