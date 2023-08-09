/* eslint-disable no-undef */
const mongoose = require("mongoose");

const admin = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: "Email is required",
  },
  password: {
    type: String,
    minlength: 6,
    required: "Password is required",
  },
});
module.exports = admin
