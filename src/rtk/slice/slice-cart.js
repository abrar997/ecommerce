import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  initialState: [],
  name: "CartItems",
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
      //   return state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return (state = []);
    },
  },
});

export const { addItem, deleteItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
