//内容 路由

const router = require('koa-router')
const { create } = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/login.middleware')



const MomentRouter = new router({prefix:'/moment'})


MomentRouter.post('/',verifyAuth,create)

module.exports = MomentRouter