import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/slice-product";
import CartSlice from "./slice/slice-cart";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
  },
});
