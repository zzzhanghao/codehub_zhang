const connection = require('../app/database')

class MomentService{
  async create(userId,content){
    const statement = `INSERT INTO moment (content,user_id) VALUES (?,?);`
    const result = await connection.execute(statement,[content,userId])
    return result[0]

  }
  async detail(ctx,next){

  }
}



module.exports = new MomentService()