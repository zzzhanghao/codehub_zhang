const router = require('koa-router')

const {login,success} = require('../controller/login.controller')
const {verifyLogin,verifyAuth} = require('../middleware/auth.middleware')

const authRouter = new router({prefix:'/login'})

authRouter.post('/', verifyLogin, login)
authRouter.get('/test', verifyAuth, success)


module.exports = authRouter