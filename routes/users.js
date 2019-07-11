var express = require("express");
var router = express.Router();
const { User, Closet } = require("../models");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("this is the main user page");
});

router.get("/register", function(req, res, next) {
  res.render("register")
});

router.post("/login", function(req, res, next) {
  let username = req.body.username

  User.findByLogin(username).then(user => {
    if(user) {
      req.session.username = username
      res.redirect("/home")
      console.log(`${username} logged in!`)

    } else {
      res.send(`${username} not found`)
    }
  });
});




module.exports = router;
