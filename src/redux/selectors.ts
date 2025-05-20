import { createSelector } from "@reduxjs/toolkit";

const selectTotalQuantity = (state: { cart: { totalQuantity: any } }) =>
  state.cart.totalQuantity;

const selectLoginSelector = (state: any) => state.login || [];

const selectLoginData = createSelector(
  [selectLoginSelector],
  (userState) => userState.user
);

export { selectLoginData, selectTotalQuantity };
