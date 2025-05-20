import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { error } from "console";

interface LoginState {
  data: {};
  isAuthenticated?: boolean;
  saving: boolean;
  error: boolean;
}

interface User {
  user: LoginState;
}
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
    loginSaving(state: any) {
      state.user.saving = true;
      state.user.error = false;
    },
    loginSaved(state: any, action: any) {
      state.user.data = action.payload;
      state.user.saving = false;
      state.user.isAuthenticated = true;
      state.user.error = false;
    },
    loginFailed(state: any) {
      state.user.isAuthenticated = false;
      state.user.error = true;
      state.user.saving = false;
    },
  },
});

export const { loginSaving, loginSaved, loginFailed } = loginSlice.actions;
export default loginSlice;
