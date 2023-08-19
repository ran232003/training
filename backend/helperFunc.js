const crypto = require("crypto");

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
module.exports = {
  generateRandomToken,
};
