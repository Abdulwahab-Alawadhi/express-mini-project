const { model, Schema } = require("mongoose");
const BookSchema = new Schema({
  title: String,
  author: String,
  price: Number,
  image: String,
});
module.exports = model("Book", BookSchema);
