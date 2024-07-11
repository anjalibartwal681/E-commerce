// eslint-disable-next-line import/no-extraneous-dependencies
import { all } from "redux-saga/effects";

import readSaga from "./readSaga";
import createSaga from "./createSaga";
// Root saga function to combine all sagas
export default function* rootSaga() {
  yield all([readSaga(), createSaga()]);
}
