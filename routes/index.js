var express = require('express');
var router = express.Router();

const db = require("../db")

console.log(db)
/* GET home page. */
router.get('/', function(req, res, next) {
  // const users = db.users.list()
  res.render('login', { title: 'Express'});
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

module.exports = router;
