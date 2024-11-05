import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const data = [
  {
    id: 1,
    title: "First car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1661355300902-36e9148281c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Second car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1685933198220-9961c323e68b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "third car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1685052189022-63e69ec3370e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
  {
    id: 4,
    title: "fourth car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1685240496122-3180dcaa976c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  },
  {
    id: 5,
    title: "fifth car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1567863786964-9d65fa4469ed?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "sixth car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1612071078206-bc912b559e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
];

export const fetchAllProductsAsync = createAsyncThunk(
  "ProductSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

const productSlice = createSlice({
  initialState: [],
  name: "ProductSlice",
  reducers: {
    fetchAllProducts: (state) => {
      return [...state];
    },
    addNewProduct: (state, action) =>
      //   state.push(action.payload);
      [...state, action.payload],
  },
  //here we have promise (fetchAllProductsAsync here dealing with it as promise js (a group of async functions))
  extraReducers: (builder) => {
    builder.addCase(fetchAllProductsAsync.pending, (state, action) => {
      //show loader here
    });
    //fulfilled completed
    builder.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      //logic here
      console.log(action);

      return (state = action.payload);
    });
  },
});

export const { fetchAllProducts, addNewProduct } = productSlice.actions;
export default productSlice.reducer;
