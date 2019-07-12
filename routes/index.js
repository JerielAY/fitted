var express = require("express");
var router = express.Router();

const { User, Fit } = require("../models");

/* GET home page. */
router.get("/", function(req, res, next) {
  if (req.session.username) {
    res.render("home", { title: "Fitted", user: req.session.username });
  } else {
    res.render("login", { title: "Fitted" });
  }
});

router.get("/home", function(req, res, next) {
  res.render("home", { title: "Fitted", user: req.session.username });
});

router.get("/celebfits", function(req, res, next) {
  res.render("celebfits", { title: "Celeb Fits" });
});

router.get("/mycloset", function(req, res, next) {
  
  res.render("mycloset", { title: "My Closet" });
});

router.get("/fits", async function(req, res, next) {
  if(req.session.username) {
    let owner = await User.findByLogin(req.session.username);
    let outfits = (await Fit.findOne({ owner })).outfits
    res.render("fits", { title: "Fits", outfits });
  } else {
    res.redirect("/login")
  }
});

router.get("/camera", function(req, res, next) {
  res.render("camera", { title: "Camera" });
});

router.get("/login", function(req, res, next) {
  if (req.session.username) {
    res.redirect("/");
  }
  res.render("login", { title: "Fitted Login" });
});

router.get("/logout", function(req, res, next) {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
