import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./modalSlice";
import LoadingSlice from "./loadingData";
import WeatherSlice from "./weatherSlice";
import AuthSlice from "./authUserSlice";
import ToastSlice from "./toastAction";
import TaskSlice from "./taskSlice";
import PokemonSlice from "./pokemonSlice";

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    loading: LoadingSlice.reducer,
    weather: WeatherSlice.reducer,
    auth: AuthSlice.reducer,
    toast: ToastSlice.reducer,
    todoLists: TaskSlice.reducer,
    pokemon: PokemonSlice.reducer,
  },
});
export default store;
