import { call, put, takeLatest } from "redux-saga/effects";
import { loginSaving, loginSaved, loginFailed } from "./loginSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

// Saga worker
function* handleLogin({
  payload,
}: PayloadAction<any>): Generator<any, void, any> {
  try {
    const { values, navigate } = payload;
    const response = yield call(fetch, "http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    // ✅ If response has an HTTP error, manually throw
    if (!response.ok) {
      const errorData = yield call([response, "json"]);
      throw new Error(
        errorData?.message || `HTTP error! Status: ${response.status}`
      );
    }

    const data = yield call([response, "json"]); // 👈 parse JSON once
    yield put(loginSaved(data)); // 👈 safe, serializable
    navigate("/dashboard");
    localStorage.setItem("isAuthenticated", "true");
  } catch (e: any) {
    yield put(loginFailed(e));
  }
}

// Saga watcher
function* mySaga() {
  yield takeLatest(loginSaving.type, handleLogin);
}

export default mySaga;
