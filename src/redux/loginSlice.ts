import { createSlice } from "@reduxjs/toolkit";

// Define complete interface for data
interface LoginState {
  data: {};
  isAuthenticated?: boolean;
  saving: boolean;
  error: boolean;
}
// Initial state after rendering
const initialState = {
  user: {
    data: {},
    isAuthenticated: false,
    saving: false,
    error: false,
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // Dispatch to API
    loginSaving(state: any) {
      state.user.saving = true;
      state.user.error = false;
    },
    // Reducer to get data from Payload
    loginSaved(state: any, action: any) {
      state.user.data = action.payload;
      state.user.saving = false;
      state.user.isAuthenticated = true;
      state.user.error = false;
    },
    // Reducer to return error
    loginFailed(state: any) {
      state.user.isAuthenticated = false;
      state.user.error = true;
      state.user.saving = false;
    },
  },
});

export const { loginSaving, loginSaved, loginFailed } = loginSlice.actions;
export default loginSlice;
