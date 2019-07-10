const mongoose = require("mongoose");

const User = require("./user");
const Closet = require("./closet");

mongoose.connect(process.env.DATABASE_URL,  { useNewUrlParser: true });

module.exports = {
  User,
  Closet
};
