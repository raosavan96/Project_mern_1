const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productsData = new Schema({
  title: String,
  description: String,
  price: Number,
  rating: Number,
  productstatus: { type: String, default: "Out-of-Stock" },
  proimg: String
});

module.exports = model("productdata", productsData);
