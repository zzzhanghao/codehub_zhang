const connection = require('../app/database')
class Commentservice{
  async create(momentId, content, id){
  
    const statement = `INSERT INTO comment (moment_id, content, user_id) VALUES (?,?,?);`
    const result = await connection.execute(statement,[momentId, content, id, commentId])
    return result[0]
  }

  async reply(momentId, content, id, commentId){
  
    const statement = `INSERT INTO comment (moment_id, content, user_id, comment_id) VALUES (?,?,?,?);`
    const result = await connection.execute(statement,[momentId, content, id, commentId])
    return result[0]
  }

  async update(commentId, content){
    const statement = `UPDATE comment SET content = ? WHERE id = ?`
    const result = await connection.execute(statement,[content, commentId])
    return result[0]
  }

}


module.exports = new Commentservice()
