
const connectionn = require('../app/database')
class UserService{
  async create(user){
    const {name,password} = user
    const statement = 'INSERT INTO users (name,password) VALUES (?,?);'

    const result = await connectionn.execute(statement,[name,password])
    return '创建用户成功'
  }

}

module.exports = new UserService()