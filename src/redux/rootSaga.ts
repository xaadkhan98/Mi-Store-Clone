import { all } from "redux-saga/effects";
import mySaga from "./loginSaga";
import dashboardSaga from "./dashboardProductSaga";
import dashboardUsersSaga from "./dashboardUsersSaga";

export default function* rootSaga() {
  // Combined multiple Sagas together
  yield all([mySaga(), dashboardSaga(), dashboardUsersSaga()]);
}
