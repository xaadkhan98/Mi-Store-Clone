import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./rootReducer";
import rootSaga from "./rootSaga";

//Create Middleware to communicate between saga and sideeffects
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  // Root Reducer = All reducers
  reducer: rootReducers,

  // Communicate between saga and action
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run Middleware
sagaMiddleware.run(rootSaga);

export default store;
