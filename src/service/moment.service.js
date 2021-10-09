
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
   async update(content,momentId){
     try {
      const statement = `UPDATE moment SET content = ? WHERE id = ?;`
      const [result] = await connection.execute(statement,[content,momentId])
      console.log(result)
      return result
     } catch (error) {
        console.log(error)
     }
   }
   async removecontent(momentId){
      //console.log(1)
     try {
      const statement = `DELETE FROM moment WHERE id = ?;`
      const result = connection.execute(statement,[momentId])
      console.log(result)
      return result
     } catch (error) {
       // console.log(error)
     }
   }
}
module.exports = new MomentService()