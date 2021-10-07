const {create,getMomentById} = require("../service/moment.service")

class MonmentControll{
    async create(ctx,next){
        ctx.body = "发表成功"
        //1.获取数据
        const userId = ctx.user.id
        const content = ctx.request.body.content
        //console.log(userId,content)
       //console.log(ctx.request.body.content)

       //2.将数据插入数据库
       const result = await create(userId,content)
       ctx.body = result
    }
    async detail(ctx,next){
        //1.获取数据
        const momentId = ctx.params.momentId
        //console.log(momentId)
        //ctx.body = "获取某一条动态的详情"
        //2.根据id查询数据
        const result = await getMomentById(momentId)
        ctx.body = result[0]
    }
}

module.exports = new MonmentControll()