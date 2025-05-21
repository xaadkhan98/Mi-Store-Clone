import { all } from "redux-saga/effects";
import mySaga from "./loginSaga";
import dashboardSaga from "./dashboardProductSaga";
import dashboardUsersSaga from "./dashboardUsersSaga";

export default function* rootSaga() {
  yield all([mySaga(), dashboardSaga(), dashboardUsersSaga()]);
}
