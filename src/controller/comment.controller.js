const Commentservice = require('../service/comment.service')

class CommentController{

  async create(ctx,next){
    const {momentId, content} = ctx.request.body
    const {id} = ctx.user

    const result = await Commentservice.create(momentId, content, id) 
    ctx.body = result

  }
}


module.exports = new CommentController()