//内容 路由

const router = require('koa-router')
const { create,detail } = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/login.middleware')



const MomentRouter = new router({prefix:'/moment'})


MomentRouter.post('/',verifyAuth,create)
MomentRouter.get('/:momentId',detail)

module.exports = MomentRouter