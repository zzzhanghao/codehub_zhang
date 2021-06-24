const jwt = require('jsonwebtoken')

const errorType = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')

//这里就暂时使用 对称加密的方式
const secretKey = 'a23dd'

//验证登录的信息是否正确
const verifyLogin = async (ctx,next) => {
  //1. 获取用户信息和密码
  const {name,password} = ctx.request.body;

  //2.判断用户名或者密码不能为空
  if(!name || !password || name === '' || password ===''){
    const error = new Error (errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    //把错误信息发射出去
    return ctx.app.emit('error',error,ctx)
  }

  //3.判断用户名是否存在
  const result = await service.getUserByName(name)
  const user = result[0]
  //如果这个结果的第一个数组为空,说明账户不存在
  if(!user){
    const error = new Error(errorType.USER_IS_NOTE_EXISTS)
    return ctx.app.emit('error',error,ctx)
  }
  //4.判断密码是否和数据库中的一致
  if(md5password(password) !== user.password){
    const error = new Error(errorType.PASSWORD_IS_INCORRECT)
    return ctx.app.emit('error',error,ctx)
  }
  
  ctx.user = user  
  await next();
}

//验证是否具有权限，auth
const verifyAuth = async (ctx, next) => {
  console.log('验证授权的中间件');
  const authorization = ctx.headers.authorization
  const token = authorization.replace("Bearer ","")
  console.log(token);
  try{
    const result = jwt.verify(token,secretKey)
    console.log(result);
    ctx.user = result
  }catch(err){
    const error = new Error(errorType.NO_AUTHORITY)
    return ctx.app.emit('error',error,ctx)
  }
  await next()
}


module.exports = {
  verifyLogin,
  verifyAuth
}