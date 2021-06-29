const router = require('koa-router')
const {create, reply, update} = require('../controller/comment.controller')
const {verifyAuth, verifyPermission} = require('../middleware/auth.middleware')



const CommentRouter = new router({prefix:'/comment'})

CommentRouter.post('/', verifyAuth, create)
//回复评论的评论
CommentRouter.post('/:commentId/reply', verifyAuth, reply)
//修改评论
CommentRouter.patch('/:commentId/update', verifyAuth, verifyPermission, update)


module.exports = CommentRouter 