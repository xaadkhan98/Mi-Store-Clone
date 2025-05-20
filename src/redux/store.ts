import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import mySaga from "./login-saga";
import createSagaMiddleware from "redux-saga";
import loginSlice from "./loginSlice";
import rootReducers from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
