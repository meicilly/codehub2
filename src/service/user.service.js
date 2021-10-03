const connection = require('../app/database.js')
class UserService{
    async create(user){
        //将user存储到数据库中
        //console.log("将用户数据保存到数据库中",user)
        const {name,password} = user
        const statement = `INSERT INTO user (name,password) VALUES(?,?);`

        const result = await connection.execute(statement,[name,password])
        return result[0]
    }
    //查看用户是否已经存在
    async getUserByName(name){
        const statement = `SELECT * FROM user WHERE name = ?;`
        const result =await connection.execute(statement,[name])
        return result[0]
    }
}

module.exports = new UserService()