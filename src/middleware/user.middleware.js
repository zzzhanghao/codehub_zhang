//用户输入信息的中间件，检查用户输入的用户名和密码

const errorType = require('../constants/error-types')
const service = require('../service/user.service')
const verifyUser = async (ctx,next) => {
  //1. 获取用户信息和密码
  const {name,password} = ctx.request.body;

  //2.判断用户名或者密码不能为空
  if(!name || !password || name === '' || password ===''){
    const error = new Error (errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    //把错误信息发射出去
    return ctx.app.emit('error',error,ctx)

  }

  //3.判断这次注册的用户名是没有被注册过的
  const result = await service.getUserByName(name)
  //如果这个结果的第一个数组不为空,说明账户已经存在
  if(result){
    const error = new Error(errorType.USER_ALREADY_EXISTS)
    return ctx.app.emit('error',error,ctx)
  }

  

  //4.最后如果条件都不满足，才会执行
  await next();
}


module.exports = {
  verifyUser
}
