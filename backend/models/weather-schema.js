const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  LocalObservationDateTime: {
    type: Date,
    required: true,
  },
  EpochTime: {
    type: Number,
    required: true,
  },
  WeatherText: {
    type: String,
    required: true,
  },
  WeatherIcon: {
    type: Number,
    required: true,
  },
  Key: {
    type: Number,
    required: true,
  },
  EnglishName: {
    type: String,
    required: true,
  },
  HasPrecipitation: {
    type: Boolean,
    required: true,
  },
  PrecipitationType: {
    type: String,
    required: false,
  },
  IsDayTime: {
    type: Boolean,
    required: true,
  },
  Temperature: {
    Metric: {
      Value: {
        type: Number,
        required: true,
      },
      Unit: {
        type: String,
        required: true,
      },
      UnitType: {
        type: Number,
        required: true,
      },
    },
    Imperial: {
      Value: {
        type: Number,
        required: true,
      },
      Unit: {
        type: String,
        required: true,
      },
      UnitType: {
        type: Number,
        required: true,
      },
    },
  },
  MobileLink: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  },
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;
