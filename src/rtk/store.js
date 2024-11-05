import { configureStore } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./slice/slice-product";

const store = configureStore({
  reducer: {
    products: fetchAllProducts,
  },
});
