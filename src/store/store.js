import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import productSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
  },
});

export default store;
