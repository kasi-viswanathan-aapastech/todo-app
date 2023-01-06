import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storageStatus: "",
};

const storageUpdateSlice = createSlice({
  name: "storageUpdate",
  initialState,
  reducers: {
    updateStatus: (state, payload) => {
      state.storageStatus = payload;
    },
  },
});

export default storageUpdateSlice.reducer;
export const { updateStatus } = storageUpdateSlice.actions;
