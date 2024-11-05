import { createStore, combineReducers, applyMiddleware } from "redux";
import { bankReducer } from "./reducer/bank-reducer";
import { productsReducer } from "./reducer/product-reducer";
import { thunk } from "redux-thunk";

const appReducer = combineReducers({
  bank: bankReducer,
  product: productsReducer,
});
export const store = createStore(appReducer, applyMiddleware(thunk));
