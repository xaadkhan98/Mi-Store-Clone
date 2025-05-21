import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
import DashboardProductSlice from "./dashboardProductSlice";
import DashboardUsersSlice from "./dashboardUsersSlice";

const rootReducers = combineReducers({
  cart: cartSlice.reducer,
  login: loginSlice.reducer,
  dashboardProducts: DashboardProductSlice.reducer,
  dashboardUsers: DashboardUsersSlice.reducer,
});

export default rootReducers;
