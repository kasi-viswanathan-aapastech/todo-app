import { configureStore } from "@reduxjs/toolkit";
import editTaskReducer from "../features/editTask";
import storageUpdateReducer from "../features/storageUpdate";

const store = configureStore({
  reducer: {
    editTask: editTaskReducer,
    storageUpdate: storageUpdateReducer,
  },
});

export default store;
