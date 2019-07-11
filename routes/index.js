var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("login", { title: "Fitted"});
});

router.get("/home", function(req, res, next) {
  res.render("home", { title: "Fitted" });
});

router.get("/celebfits", function(req, res, next){
  res.render("celebfits", {title: "Celeb Fits"});
});

router.get("/mycloset", function(req, res, next){
  res.render("mycloset", {title: "My Closet"})
});

router.get("/login", function(req, res, next) {
  if(req.session.username) {
    res.redirect("/home")
  }
  res.render("login", { title: "Fitted Login" });
});

router.get("/logout", function(req, res, next) {
  req.session.destroy()
  res.send("this is the logout page");
});

module.exports = router;
