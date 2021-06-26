//内容 路由

const router = require('koa-router')
const { create, detail ,muldetail} = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/login.middleware')



const MomentRouter = new router({prefix:'/moment'})


MomentRouter.post('/',verifyAuth,create)
//获取单个用户评论
MomentRouter.get('/:momentId',detail)
//获取多个用户评论
MomentRouter.get('/',muldetail)

module.exports = MomentRouter 