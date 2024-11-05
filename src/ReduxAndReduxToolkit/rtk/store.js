import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./slices/slice-bank";
import ProductSlice from "./slices/slice-products";

export const store = configureStore({
  reducer: {
    bank: bankSlice,
    product: ProductSlice,
  },
  // devTools: false, //if u want hide redux from dev tools
});
