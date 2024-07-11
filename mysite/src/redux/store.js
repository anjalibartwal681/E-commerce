/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import rootSaga from "../saga/rootSaga";

import createSlice from "./createSlice";
import cartSlice from "./cartSlice";
import readSlice from "./readSlice";
// eslint-disable-next-line no-unused-vars, import/no-named-as-default
// eslint-disable-next-line no-undef
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    // eslint-disable-next-line no-undef
    cart: cartSlice,
    read: readSlice,
    create: createSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
