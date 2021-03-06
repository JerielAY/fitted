var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
const { db, User } = require("../models");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("this is the main user page");
});

router.get("/register", function(req, res, next) {
  res.render("register");
});

router.post("/register", function(req, res, next) {
  const name = req.body.name;
  const email = req.body.email;
  db.registerNewUser({ name, email });
  req.session.username = name;
  res.redirect("/")
});

router.post("/login", function(req, res, next) {
  let username = req.body.username;

  User.findByLogin(username).then(user => {
    if (user) {
      req.session.username = username;
      req.session.userID = user._id
      res.redirect("/");
    } else {
      res.send(`${username} not found`);
    }
  });
});

module.exports = router;
