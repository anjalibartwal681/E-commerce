/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import { put, call, takeEvery, takeLatest } from "redux-saga/effects";

import { server } from "../ApiData/server";

import {
  setCreateData,
  setCreateError,
  setCreateLoading,
} from "../redux/createSlice";

function* createSagaWork(action) {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Action", action);
  const { id, url, data } = action.payload;
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Action", data);

  try {
    yield put(setCreateLoading({ id, loading: true }));
    const { data: responseData } = yield call(server.post, url, data);
    yield put(setCreateData({ id, data: responseData }));
  } catch (error) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>error", error);
    yield put(setCreateError({ id, error: error.message }));
  }
}

export default function* createSaga() {
  yield takeLatest("create_req", createSagaWork);
}
