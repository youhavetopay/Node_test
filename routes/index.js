var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbproject'
});

conn.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  sql = 'select * from users'

  conn.query(sql,function(err, row) {
    if(err) throw err;
    else{
      res.render('index', { title: 'Express', users:row });
    }
  })
  
});

router.post('/', function(req, res, next) {
  var {id, pw} = req.body
  var sql1 = "INSERT INTO `users`(`userID`, `userPW`) VALUES (?, ?)"
 
  conn.query(sql1, [id, pw], function(err, row) {
    if (err) throw err;
    else{
      res.redirect('/');
    }
  })
})

module.exports = router;
