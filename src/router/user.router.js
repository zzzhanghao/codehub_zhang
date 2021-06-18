const Router = require('koa-router')
const {create} = require('../controller/user.controller')

const userRouter = new Router({prefix:'/user'})

userRouter.post('/', create) 

module.exports = userRouter

