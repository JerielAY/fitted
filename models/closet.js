const mongoose = require("mongoose");

const closetSchema = new mongoose.Schema({
  image: {
    type: Object,
    required: true
  }
});

const Closet = mongoose.model("Closet", closetSchema, "closets");

module.exports = Closet;
