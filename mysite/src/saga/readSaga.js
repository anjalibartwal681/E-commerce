/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import { put, call, takeEvery, takeLatest } from "redux-saga/effects";

// eslint-disable-next-line import/no-unresolved
import { server } from "../ApiData/server";

import { setReadData, setReadLoading, setReadError } from "../redux/readSlice";

function* readSagaWork(action) {
  const { id, url, data } = action.payload;
  console.log(">>>>>>>>responsedata", id, url, data);

  try {
    yield put(setReadLoading({ id, loading: true }));
    // const { data: responsedata } = yield call(server.get,url, {params: data});
    const response = yield call(server.get, url, { params: data });
    const { data: responseData } = response;
    yield put(setReadData({ id, data: responseData }));
  } catch (error) {
    yield put(setReadError({ id, error: error.message }));
  }
}

export default function* readSaga() {
  yield takeEvery("read_req", readSagaWork);
  // yield takeLatest("read_req", readSagaWork);
}
