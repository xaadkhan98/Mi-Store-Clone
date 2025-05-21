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

const DashboardUsersSlice = createSlice({
  name: "dashboardUsers",
  initialState,
  reducers: {
    dashboardUsersSaving(state: any) {
      state.saving = true;
      state.error = false;
    },
    dashboardUsersSaved(state: any, action: any) {
      state.data = action.payload;
      state.saving = false;
      state.error = false;
    },
    dashboardUsersFailed(state: any) {
      state.saving = false;
      state.error = true;
    },
  },
});

export const {
  dashboardUsersSaving,
  dashboardUsersSaved,
  dashboardUsersFailed,
} = DashboardUsersSlice.actions;

export default DashboardUsersSlice;
