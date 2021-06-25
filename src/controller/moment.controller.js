
const MomentService = require('../service/moment.service')

//内容接口
class MomentController{
  async create(ctx,next){
    ctx.body = '发表动态成功'
    //1、获取用户相关数据
    const userId = ctx.user.id
    const content = ctx.request.body.content
    console.log(userId,content);
    //2、将用户数据插入到数据库
    const result = await MomentService.create(userId,content)
    ctx.body = result

  }
}

module.exports = new MomentController()