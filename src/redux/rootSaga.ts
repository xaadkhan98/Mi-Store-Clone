import { all } from "redux-saga/effects";
import mySaga from "./loginSaga";
import dashboardSaga from "./dashboardProductSaga";

export default function* rootSaga() {
  yield all([mySaga(), dashboardSaga()]);
}
