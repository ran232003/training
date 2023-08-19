const Ajv = require("ajv").default;
var jwt = require("jsonwebtoken");
const User = require("../models/user-schema");
const MyError = require("../models/MyError");
const bcrypt = require("bcrypt");
var nodemailer = require("nodemailer");
const { mailHtml } = require("../mail");
const { addHours } = require("date-fns");
const crypto = require("crypto");
const { generateRandomToken } = require("../helperFunc");

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
    res.cookie("Auth_Cookie", token);
    // res.setHeader("Set-Cookie", token);
    return res.json({ status: "ok", msg: "Success", user: user });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
const getUser = async (req, res, next) => {
  let user = req.user;

  return res.json({ status: "ok", user: user, msg: "Success" });
};
const signout = async (req, res, next) => {
  res.clearCookie("Auth_Cookie");
  res.status(200);

  return res.json({ status: "ok", msg: "Success" });
};
const forgotPassword = async (req, res, next) => {
  //db.student.updateOne({name: "Annu"}, {$set:{age:25}})
  try {
    //check db user
    const { email } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      let err = new MyError("User Not Exist", 401);
      return next(err);
    }
    const numBytes = 32;

    // Generate random token using await
    const token = await generateRandomToken(numBytes);
    const now = new Date(); // Create a new Date object representing the current date and time in UTC
    const localTimeOffset = now.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
    const localTime = new Date(now.getTime() - localTimeOffset);
    //user.resetPasswordExp = localTime.getDate() + 3600; //1 hour token
    let date = new Date();
    const currentDateFixed = addHours(date, 1);
    user.resetPasswordExp = currentDateFixed;
    user.resetPasswordToken = token;
    await user.save();
    //google: nqvossuyevelazlv
    let config = {
      service: "gmail",
      auth: {
        user: "mike232003@gmail.com",
        pass: "nqvossuyevelazlv",
      },
    };
    let newMail = mailHtml.replace("userToken", token);
    console.log(newMail);
    let transporter = nodemailer.createTransport(config);
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "mike232003@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: newMail,
    });
    return res.json({ status: "ok", msg: "Success" });
  } catch (error) {
    let err = new MyError("Internal Server Error", 500);
    return next(err);
  }
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let checkUser = await User.findOne({ email: email });

    if (!checkUser) {
      let err = new MyError("User Was Not Found");
      return next(err);
    }
    let passwordCheck = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );
    if (!passwordCheck) {
      const err = new MyError("Wrong Details", 500);
      return next(err);
    }

    let token = jwt.sign({ id: checkUser._id, email: email }, "my-secret", {
      expiresIn: "1d",
    });
    res.status(201);
    res.cookie("Auth_Cookie", token);
    // res.setHeader("Set-Cookie", token);
    return res.json({ status: "ok", user: checkUser, msg: "Success" });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
const resetPassword = async (req, res, next) => {
  let { userToken, password } = req.body;
  let currentTime = new Date();
  console.log(req.body, userToken);
  try {
    const user = await User.findOne({
      resetPasswordToken: userToken,
    });
    if (!user) {
      let err = new MyError("User Not Found", 401);
      return next(err);
    }
    let timeExpire = user.resetPasswordExp;
    console.log(timeExpire > currentTime, timeExpire < currentTime);
    if (timeExpire < currentTime) {
      let err = new MyError("Time Expire", 500);
      return next(err);
    }
    const hashPassword = await bcrypt.hash(password, 12);
    user.password = hashPassword;
    await user.save();
    //
    return res.json({ status: "ok", msg: "Success" });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
module.exports = {
  signup,
  login,
  getUser,
  signout,
  forgotPassword,
  resetPassword,
};
