//对所有的 router 做一个封装
const fs = require('fs')

const userRouters = function(app){
  //fs.readdirSync(__dirname)就会显示这个文件夹里面的所有文件，载一个数组里面
  fs.readdirSync(__dirname).forEach(file => {
    if(file === 'index.js') return
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}

module.exports = userRouters