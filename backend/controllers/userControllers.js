const Ajv = require("ajv").default;
var jwt = require("jsonwebtoken");
const User = require("../models/user-schema");
const MyError = require("../models/MyError");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let checkUser = await User.findOne({ email: email });

    if (checkUser) {
      let err = new MyError("Email Exist");
      return next(err);
    }
    const hashPassword = await bcrypt.hash(password, 12);
    let user = new User({ email: email, password: hashPassword });
    await user.save();

    let token = jwt.sign({ id: user._id, email: email }, "my-secret", {
      expiresIn: "1d",
    });
    res.status(201);
    res.setHeader("Set-Cookie", token);
    return res.json({ status: "ok", user: user });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
const getUser = async (req, res, next) => {
  let user = req.user;

  return res.json({ status: "ok", user: user });
};
const login = async (req, res, next) => {};
module.exports = {
  signup,
  login,
  getUser,
};
