class LoginControlller{

  login(ctx,next){
    const {name} = ctx.request.body
    ctx.response.body = `恭喜${name}登录成功`
  }
}

module.exports = new LoginControlller()