import { createSlice } from "@reduxjs/toolkit";
import ProductDetails from "../components/ProductDetails";
const initialState = {
  products: ProductDetails,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    removeFromCart: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
