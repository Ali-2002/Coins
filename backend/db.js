const mysql = require('mysql');
require('dotenv').config()
console.log(process.env)
const connection = mysql.createConnection({
  host: process.env.HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
});

connection.connect((err) => {
  if (!err) {
    return console.log("connection successfully established");
  }
  console.log("Error happened", err);
});
module.exports = connection;