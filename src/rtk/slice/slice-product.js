import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  initialState: [],
  name: "ProductsAll",
  reducers: {
    fetchAllProducts: (state, action) => {},
    AddToCart: (state, action) => {},
  },
});

export const { fetchAllProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
