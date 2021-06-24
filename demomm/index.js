const koa = require('koa')
const router = require('koa-router')
const jwt = require('jsonwebtoken')

const app = new koa()
const testrouter = new router()

const secretKey = 'a23dd'

testrouter.post('/test',(ctx,next) => {
  const user = {
    id: 100,
    name: 'zhang'
  }
  const token = jwt.sign(user,secretKey,{expiresIn: 100})
  ctx.body = token
})
//验证接口实现
testrouter.post('/demo',(ctx,next) => {  
  const authorization = ctx.headers.authorization
  const token = authorization.replace("Bearer ","")
  try{
    const result = jwt.verify(token,secretKey)
    ctx.body = result
  }catch(error){
    console.log(error.message);
  }
})

app.use(testrouter.routes())
app.use(testrouter.allowedMethods())
app.listen(8080,() => {
  console.log('服务器启动成功');
})
