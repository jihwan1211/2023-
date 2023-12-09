import { all, fork } from "redux-saga/effects";

import userSaga from "./userSaga";
import perfumeSaga from "./perfumeSaga";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(perfumeSaga)]);
}
