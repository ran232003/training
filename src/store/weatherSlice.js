import { createSlice } from "@reduxjs/toolkit";
const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherMain: null,
    fiveDaysWeather: null,
    favortiteMap: {},
    currentWeather: null,
  },
  reducers: {
    mainWeather(state, action) {
      console.log("here");
      state.weatherMain = action.payload;
    },
    setFiveDaysWeather(state, action) {
      state.fiveDaysWeather = action.payload;
    },
    setCurrentWeather(state, action) {
      state.currentWeather = action.payload;
    },
    addFavorite(state, action) {
      let check = state.favortiteMap[action.payload.key];
      if (check) {
        //remove fav
        let copy = { ...state.favortiteMap };
        delete copy[action.payload.key];
        state.favortiteMap = copy;
      } else {
        //add fave
        state.favortiteMap[action.payload.key] = action.payload.currentWeather;
      }
    },
    removeFavorite(state, action) {},
  },
});

export default WeatherSlice;

export const weatherAction = WeatherSlice.actions;
