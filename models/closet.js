const mongoose = require("mongoose");

const closetSchema = new mongoose.Schema({
    name: String,
    type: Object,
});


const Closet = mongoose.model("Closet", closetSchema, "closets");
let closet1 = new Closet ({blackvans:"img/blackvans.jpeg", bluejeans:"img/bluejeans.jpeg", redtshirt:"img/redtshirt.jpg"})
closet1.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

module.exports = Closet,closet1;
