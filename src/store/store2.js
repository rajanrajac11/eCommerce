import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";
const store2 = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store2;
