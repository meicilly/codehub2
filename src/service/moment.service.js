
const connection = require("../app/database")

class MomentService{
   async create(userId,content){
    const statement = `INSERT INTO moment (user_id,content) VALUES(?,?);`
    const result = await connection.execute(statement,[userId,content])
    return result[0]
   }
   async getMomentById(momentId){
      const statement = `
      SELECT 
         m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
         JSON_OBJECT("id",u.id,"name",u.name) user
      FROM moment m
      LEFT JOIN user u on m.user_id = u.id
      WHERE m.id = ?;
      `
      const result = connection.execute(statement,[momentId])
      return result
   }
}
module.exports = new MomentService()