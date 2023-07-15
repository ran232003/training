import { createSlice } from "@reduxjs/toolkit";
const WeatherSlice = createSlice({
  name: "weather",
  initialState: { weatherMain: null, fiveDaysWeather: null },
  reducers: {
    mainWeather(state, action) {
      console.log("here");
      state.weatherMain = action.payload;
    },
    setFiveDaysWeather(state, action) {
      state.fiveDaysWeather = action.payload;
    },
  },
});

export default WeatherSlice;

export const weatherAction = WeatherSlice.actions;
