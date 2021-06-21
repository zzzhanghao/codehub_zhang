const Router = require('koa-router')
const {create} = require('../controller/user.controller')
const {verifyUser} = require('../middleware/user.middleware')
const userRouter = new Router({prefix:'/user'})


//在create之前加上一个中间件，判断用户的输入是否合格
userRouter.post('/', verifyUser, create) 

module.exports = userRouter

