const errorType = require('../constants/error-types')

const errorHandle = (error,ctx) => {
  let status,message
  switch(error.message){
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED :
      status = 400
      message = '用户名或者密码不能为空'
      break
    case errorType.USER_ALREADY_EXISTS :
      //409冲突  Conflict
      status = 409
      message = '用户名已存在'
      break
    default:
      status: 404
      message: 'NOT FOUND'
  }
  console.log(error.message);
  ctx.status = status
  ctx.body = message     

}

module.exports = errorHandle