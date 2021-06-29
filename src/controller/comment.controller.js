const Commentservice = require('../service/comment.service')

class CommentController{

  async create(ctx, next){
    const {momentId, content} = ctx.request.body
    const {id} = ctx.user

    const result = await Commentservice.create(momentId, content, id) 
    ctx.body = result
  }
  
  async reply(ctx, next){
    const {momentId, content} = ctx.request.body
    const {id} = ctx.user
    const {commentId} = ctx.params
    const result = await Commentservice.reply(momentId, content, id, commentId) 
    ctx.body = result
  }

  async update(ctx, next){
    const {commentId} = ctx.params
    const {content} = ctx.request.body
    const result = Commentservice.update(commentId, content)
    ctx.body = result

  }
}
  

module.exports = new CommentController()