import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "./AuthSlice";

const store = configureStore({
  reducer: authSliceReducers,
});

export default store;
