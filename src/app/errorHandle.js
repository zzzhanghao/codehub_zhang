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
    case errorType.USER_IS_NOTE_EXISTS :
      status = 400
      message = '用户名不存在'
    break
    case errorType.PASSWORD_IS_INCORRECT :
      status = 400
      message = '用户密码错误'
    break
    //Unauthorized 请求要求用户的身份认证 
    case errorType.NO_AUTHORITY :
      status = 401
      message = '用户没有权限'
    break
    case errorType.NO_PERMISSION :
      status = 401
      message = '用户没有权限'
    break
    default:
      status: 404
      message: 'NOT FOUND'
  }
  ctx.status = status
  ctx.body = message     

}

module.exports = errorHandle