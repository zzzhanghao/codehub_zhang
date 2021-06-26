//内容 路由

const router = require('koa-router')
const { create, detail ,muldetail,modifiy} = require('../controller/moment.controller')
const { verifyAuth,verifyPermission } = require('../middleware/auth.middleware')



const MomentRouter = new router({prefix:'/moment'})


MomentRouter.post('/',verifyAuth,create)
//获取单个用户评论
MomentRouter.get('/:momentId',detail)
//获取多个用户评论
MomentRouter.get('/',muldetail)
//修改用户的动态内容，这里使用的是patch
MomentRouter.patch('/:momentId', verifyAuth, verifyPermission, modifiy)

module.exports = MomentRouter 