import { createSelector } from "@reduxjs/toolkit";

//Direct Selector for Quantity
const selectTotalQuantity = (state: { cart: { totalQuantity: any } }) =>
  state.cart.totalQuantity;

//Direct Selector for Total Price
const selectTotalPrice = (state: { cart: { totalPrice: any } }) =>
  state.cart.totalPrice;

// Direct Selector for Login Status
const selectLoginSelector = (state: any) => state.login || [];
const selectLoginData = createSelector(
  [selectLoginSelector],
  (userState) => userState.user
);

// Products selector for Dashboard
const dashboardProductsSelector = (state: any) => state.dashboardProducts.data;
const dashboardUsersSelector = (state: any) => state.dashboardUsers.data;

export {
  selectLoginData,
  selectTotalQuantity,
  selectTotalPrice,
  dashboardProductsSelector,
  dashboardUsersSelector,
};
