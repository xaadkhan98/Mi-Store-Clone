import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
import DashboardProductSlice from "./dashboardProductSlice";

const rootReducers = combineReducers({
  cart: cartSlice.reducer,
  login: loginSlice.reducer,
  dashboardProducts: DashboardProductSlice.reducer,
});

export default rootReducers;
