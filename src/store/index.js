import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./modalSlice";
import LoadingSlice from "./loadingData";
import WeatherSlice from "./weatherSlice";

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    loading: LoadingSlice.reducer,
    weather: WeatherSlice.reducer,
  },
});
export default store;
