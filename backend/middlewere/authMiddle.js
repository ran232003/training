const Ajv = require("ajv").default;
const ajv = new Ajv();
const MyError = require("../models/MyError");
const schema_user = require("../schema/userSchema.json");
const jwt = require("jsonwebtoken");

const userValidateSchema = async (req, res, next) => {
  //req.test = "test";
  const validate_schema = ajv.compile(schema_user);
  let vaildate = validate_schema(req.body);
  if (vaildate) {
    next();
  } else {
    // res.status(400);
    // return res.json({ status: "fail" });
    console.log(vaildate.errors, vaildate, validate_schema.errors);
    let err = new MyError("Schema Faild", 400);
    return next(err);
  }
};
const verifyToken = async (req, res, next) => {
  console.log(req.headers.cookie);
  let token = req.headers.cookie;
  try {
    const decodedToken = jwt.verify(token, "my-secret");
    console.log(decodedToken);
    req.user = decodedToken;
    return next();
  } catch (error) {
    console.log(error);
    let err = new MyError("Token Expired", 400);
    return next(err);
  }
};
module.exports = {
  userValidateSchema,
  verifyToken,
};
