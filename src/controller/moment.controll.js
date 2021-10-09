const {create,getMomentById,update,removecontent} = require("../service/moment.service")

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
    //修改内容
    async update(ctx,next){
        //1.获取参数
        const {momentId} = ctx.params;
        //2.修改类容
        const content = ctx.request.body.content
        //const {id} = ctx.user
        const result = await update(content,momentId)
        //console.log(result)
        //console.log(momentId,content)
        ctx.body = result
    }
    //删除评论
    async remove(ctx,next){
        //1.获取momentId
        const {momentId} = ctx.params
        //2.删除内容
        const result = await removecontent(momentId)
        //console.log(result)
        ctx.body = "删除成功"
    }
}

module.exports = new MonmentControll()