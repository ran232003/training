import { createSlice } from "@reduxjs/toolkit";
const ModalSlice = createSlice({
  name: "modal",
  initialState: { popModal: false },
  reducers: {
    toggleModal(state, action) {
      state.popModal = action.payload;
    },
  },
});

export default ModalSlice;

export const modalAction = ModalSlice.actions;
