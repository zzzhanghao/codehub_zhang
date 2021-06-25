const jwt = require('jsonwebtoken')

//这里就暂时使用 对称加密的方式
const secretKey = 'a23dd'

class LoginControlller{
  async login(ctx,next){
    const {id,name} = ctx.request.body
    const token = jwt.sign({id,name},secretKey,{expiresIn: 100})
    ctx.body = {
      id,
      name,
      token
    }
  } 

  async success(ctx,next){
    ctx.response.body = '恭喜测试成功'
  }
}

module.exports = new LoginControlller()

