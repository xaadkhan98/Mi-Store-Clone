import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  data: {};
  saving: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  data: {},
  saving: false,
  error: false,
};

const DashboardProductSlice = createSlice({
  name: "dashboardProducts",
  initialState,
  reducers: {
    dashboardProductsSaving(state: any) {
      state.saving = true;
      state.error = false;
    },
    dashboardProductsSaved(state: any, action: any) {
      state.data = action.payload;
      state.saving = false;
      state.error = false;
    },
    dashboardProductsFailed(state: any) {
      state.saving = false;
      state.error = true;
    },
  },
});

export const {
  dashboardProductsFailed,
  dashboardProductsSaving,
  dashboardProductsSaved,
} = DashboardProductSlice.actions;

export default DashboardProductSlice;
