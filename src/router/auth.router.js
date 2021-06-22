const router = require('koa-router')
const {login} = require('../controller/login.controller')
const {verifyLogin} = require('../middleware/login.middleware')

const authRouter = new router({prefix:'/login'})

authRouter.post('/', verifyLogin, login)

module.exports = authRouter