const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  resetPasswordToken: String,
  resetPasswordExp: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
