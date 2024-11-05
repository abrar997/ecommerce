import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  initialState: 1000,
  name: "bankSlice",
  reducers: {
    withdraw: (state, action) => {
      return state - action.payload;
    },
    deposit: (state, action) => {
      return state + action.payload;
    },
  },
});

export const { withdraw, deposit } = bankSlice.actions;
const bankReducer = bankSlice.reducer;

export default bankReducer;
