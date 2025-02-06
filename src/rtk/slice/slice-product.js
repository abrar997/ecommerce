import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk("ProductSlice", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

const ProductSlice = createSlice({
  initialState: [],
  name: "ProductsAll",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const { fetchAllProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
