const errorType = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')


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

  await next();
}

module.exports = {
  verifyLogin

}