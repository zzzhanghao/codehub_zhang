
const connectionn = require('../app/database')
class UserService{
  async create(user){
    const {name,password} = user
    const statement = 'INSERT INTO users (name,password) VALUES (?,?);'

    const result = await connectionn.execute(statement,[name,password])
    return '创建用户成功'
  }

  async getUserByName(name){
    const statement = "SELECT * FROM users WHERE name= ?;"
    const result = await connectionn.execute(statement,[name])
    return result[0]
    
  }

}

module.exports = new UserService()