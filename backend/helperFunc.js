const crypto = require("crypto");
const Ajv = require("ajv").default;
const ajv = new Ajv();
const generateRandomToken = async (numBytes) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(numBytes, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer.toString("hex"));
      }
    });
  });
};
const checkValidation = (request, schema) => {
  try {
    console.log("in validation", request);
    const dynamicModule = require(`./schema/${schema}`);
    const validate_schema = ajv.compile(dynamicModule);
    if (!validate_schema(request)) {
      console.log("error validation", validate_schema.errors);
    }
    console.log("no error");

    return true;
    // Check if variables field exists and is a string
  } catch (error) {
    console.log("in error");
    return false;
  }
};
module.exports = {
  generateRandomToken,
  checkValidation,
};
