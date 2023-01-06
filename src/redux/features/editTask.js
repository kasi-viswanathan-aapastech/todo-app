import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  task: "",
};

const editTaskSlice = createSlice({
  name: "editTask",
  initialState,
  reducers: {
    redactTask: (state, action) => {
      const { id, task } = action.payload;
      state.id = id;
      state.task = task;
    },
    clearRedact: (state) => {
      state.id = 0;
      state.task = "";
    },
  },
});

export default editTaskSlice.reducer;
export const { redactTask, clearRedact } = editTaskSlice.actions;
