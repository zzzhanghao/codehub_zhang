//有关权限请求数据库的操作
const connection = require('../app/database') 
class AuthService{
  async checkMoment(momentId, userId, tableName){
    const statement = `SELECT * FROM ${tableName} WHERE id=? AND user_id = ?; `
    const result = await connection.execute(statement,[momentId, userId])

    return result[0].length == 0 ? false : true
  }


}

module.exports = new AuthService()


