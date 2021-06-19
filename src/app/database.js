const mysql = require('mysql2')
const {  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = require('./config')

console.log(MYSQL_HOST);
const pool = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
})

pool.getConnection((err,conn) => {
  conn.connect((err) => {
    if(err) {
      console.log('连接失败',err);
    }else{
      console.log('数据库连接成功');
    }
  })
})

module.exports = pool.promise()