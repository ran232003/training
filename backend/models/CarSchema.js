const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  model: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 10000000,
  },
  id: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
