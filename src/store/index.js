import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./modalSlice";
import LoadingSlice from "./loadingData";

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    loading: LoadingSlice.reducer,
  },
});
export default store;
