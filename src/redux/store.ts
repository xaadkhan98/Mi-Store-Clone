import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./rootReducer";
import dashboardSaga from "./dashboardProductSaga";
import rootSaga from "./rootSaga";

//Create Middleware to communicate between saga and sideeffects
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run Middleware
sagaMiddleware.run(rootSaga);

export default store;
