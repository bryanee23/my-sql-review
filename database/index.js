const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'ball',
})

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to server')
  };
})
module.exports = db;
//CREATE DATABASE ball;
//show database