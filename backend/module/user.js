const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const schemaUser = new Schema({
  username: String,
  useremail: String,
  password: String
});

module.exports = model("signupdata", schemaUser);
