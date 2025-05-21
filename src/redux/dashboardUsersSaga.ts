import { call, put, takeLatest } from "redux-saga/effects";

import {
  dashboardUsersSaving,
  dashboardUsersSaved,
  dashboardUsersFailed,
} from "./dashboardUsersSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleProducts({}: PayloadAction<any>): Generator<any, void, any> {
  try {
    // Wait for response
    const response = yield call(fetch, "https://fakestoreapi.com/users");
    if (!response.ok) {
      const errorData = yield call(() => response.json());
      throw new Error(
        errorData?.message || `HTTP error! Status: ${response.status}`
      );
    }
    // Call the function and stop execution until some result is recieved
    const data = yield call(() => {
      // Returns a promie that result to Javascript object.
      return response.json();
    });

    console.log(data);

    yield put(dashboardUsersSaved(data));
  } catch (e: any) {
    yield put(dashboardUsersFailed(e));
  }
}

// Watcher Function > continously watching dispatched actions.
function* dashboardUsersSaga() {
  yield takeLatest(dashboardUsersSaving, handleProducts);
}

export default dashboardUsersSaga;
