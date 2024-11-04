const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const querySchema = new Schema({
  useremail: String,
  userquery: String,
  queryStatus: { type: String, default: "Unread" }
});

module.exports = model("userQuery", querySchema);
