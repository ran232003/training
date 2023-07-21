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
    setFavorites(state, action) {
      state.favortiteMap = action.payload;
    },
    addFavorite(state, action) {
      let check = state.favortiteMap[action.payload.Key];
      if (check) {
        //remove fav
        let copy = { ...state.favortiteMap };
        delete copy[action.payload.Key];
        state.favortiteMap = copy;
      } else {
        //add fave
        state.favortiteMap[action.payload.Key] = action.payload.currentWeather;
      }
    },
    removeFavorite(state, action) {},
  },
});

export default WeatherSlice;

export const weatherAction = WeatherSlice.actions;
