const connection = require('../app/database')
class Commentservice{
  async create(momentId, content, id){
  
    const statement = `INSERT INTO comment (moment_id, content, user_id) VALUES (?,?,?);`
    const result = await connection.execute(statement,[momentId, content, id])
    return result[0]
  }

}


module.exports = new Commentservice()
