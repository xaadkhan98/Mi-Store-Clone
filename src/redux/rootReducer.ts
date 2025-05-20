import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";

const rootReducers = combineReducers({
  cart: cartSlice.reducer,
  login: loginSlice.reducer,
});

export default rootReducers;
