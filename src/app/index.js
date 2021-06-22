const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouters = require('../router/index')
const errorHandle = require('../app/errorHandle')
const app = new Koa()


app.use(bodyParser())
userRouters(app)
app.on('error',errorHandle)

module.exports = app;