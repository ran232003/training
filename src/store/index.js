import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./modalSlice";
import LoadingSlice from "./loadingData";
import WeatherSlice from "./weatherSlice";
import AuthSlice from "./authUserSlice";

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    loading: LoadingSlice.reducer,
    weather: WeatherSlice.reducer,
    auth: AuthSlice.reducer,
  },
});
export default store;
