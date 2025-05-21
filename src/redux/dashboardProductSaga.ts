import { call, put, takeLatest } from "redux-saga/effects";

import {
  dashboardProductsFailed,
  dashboardProductsSaved,
  dashboardProductsSaving,
} from "./dashboardProductSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleProducts({}: PayloadAction<any>): Generator<any, void, any> {
  try {
    // Wait for response
    const response = yield call(fetch, "https://fakestoreapi.in/api/products");
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

    yield put(dashboardProductsSaved(data));
  } catch (e: any) {
    yield put(dashboardProductsFailed(e));
  }
}

// Watcher Function > continously watching dispatched actions.
function* dashboardSaga() {
  yield takeLatest(dashboardProductsSaving, handleProducts);
}

export default dashboardSaga;
