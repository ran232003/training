const Car = require("../models/CarSchema");
const MyError = require("../models/MyError");

const saveToDb = async (req, res, next) => {
  console.log("saveToDb");
  try {
    //insert array of objects to db
    const saveCars = await Car.create(req.body);

    return res.json({ status: "ok", saveCars });
  } catch (error) {
    const err = new MyError("Internal Server Error", 500);
    return next(err);
  }
};
const fetchAllCars = async (req, res, next) => {
  console.log("saveToDb");
  try {
    //insert array of objects to db
    const cars = await Car.find();

    return res.json({ status: "ok", cars });
  } catch (error) {
    const err = new MyError("Internal Server Error", 500);
    return next(err);
  }
};
module.exports = {
  saveToDb,
  fetchAllCars,
};
