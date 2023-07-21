const Ajv = require("ajv").default;

const Weather = require("../models/weather-schema");
const schema_user = require("../schema/jsonSchema.json");
const weatherSchema = require("../schema/weatherSchema.json");
const ajv = new Ajv();
//const validate_user = ajv.compile(schema_user);

const validateSchema = (req, res, next) => {
  const validate_user = ajv.compile(schema_user);
  console.log(req.body);
  console.log(validate_user(req.body), "here");
  if (validate_user(req.body)) {
    return res.json({ status: "ok" });
  }
  return res.json({ status: "fail" });
};
const addFavorite = async (req, res, next) => {
  const validate_user = ajv.compile(weatherSchema);
  console.log(validate_user(req.body), "here");
  if (!validate_user(req.body)) {
    console.log(validate_user.errors);
    return res.json({ status: "fail" });
  }
  const weather = new Weather(req.body);
  await weather.save();
  console.log(weather);
  return res.json({ status: "ok" });
};
const getFavorites = async (req, res, next) => {
  try {
    let favorites = await Weather.find();
    let faveMap = {};
    favorites.map((item) => {
      faveMap[item.Key] = item;
    });
    console.log(faveMap);
    return res.json({ status: "ok", favorites: faveMap });
  } catch (error) {
    return res.json({ status: "fail" });
  }
};
const removeFavorites = async (req, res, next) => {
  try {
    let key = req.params.key;
    let favorites = await Weather.deleteOne({ Key: key });

    console.log(favorites);
    return res.json({ status: "ok", favorites: favorites });
  } catch (error) {
    return res.json({ status: "fail" });
  }
};
module.exports = {
  validateSchema,
  removeFavorites,
  getFavorites,
  addFavorite,
};
