const router = require('koa-router')
const {create} = require('../controller/comment.controller')
const {verifyAuth} = require('../middleware/auth.middleware')




const CommentRouter = new router({prefix:'/comment'})


CommentRouter.post('/',verifyAuth,create)


module.exports = CommentRouter 