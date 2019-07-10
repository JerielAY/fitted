var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://fitted:<churchofeightwheels>@fitted-dplwo.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we did it");
  var usersSchema = new mongoose.Schema({
    name: String,
    clothes: Array
  });

  usersSchema.methods.greet = function() {
    var greeting = this.name
      ? "Hello " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  var User = mongoose.model("User", usersSchema);
  var jeriel = new User({ name: "Jeriel" });
  console.log(jeriel.name); 

});

let login = document.queryselector("#login");
login.addEventlistener("onkeydown", () => {
  Window.localStorage;
});
