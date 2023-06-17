const Ajv = require("ajv").default;

const schema_user = require("../schema/jsonSchema.json");
const ajv = new Ajv();
const validate_user = ajv.compile(schema_user);

const validateSchema = (req, res, next) => {
  console.log(req.body);
  console.log(validate_user(req.body), "here");
  if (validate_user(req.body)) {
    return res.json({ status: "ok" });
  }
  return res.json({ status: "fail" });
};

module.exports = {
  validateSchema,
};
