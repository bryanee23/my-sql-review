const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'ball'
})

db.connect((err)=>{
  if(err) {
    console.log(err);
  } else {
    console.log('Congrats! Database Connected!')
  }
});

module.exports = db;

/*
"node js connect to mysql"
https://expressjs.com/en/guide/database-integration.html
*/