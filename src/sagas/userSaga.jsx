import { all, put, takeLatest, call, delay, fork } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFaliure, getEmotionStatusRequest, getEmotionStatusSuccess, getEmotionStatusFailure } from "../reducer/user";

import axios from "axios";

// function loginAPI(data) {}

function* logIn(action) {
  try {
    // const result = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: loginSuccess,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: loginFaliure,
      data: err.response.data,
    });
  }
}

function getEmoAPI(data) {
  console.log(data);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  return axios.post("/model", { sentence: data }, config);
}

function* getEmotion(action) {
  console.log(action);
  try {
    // yield delay(1000);
    const result = yield call(getEmoAPI, action.payload);
    console.log("asdadas", result);
    yield put({
      type: getEmotionStatusSuccess,
      data: result.data.result,
      // data: "슬픔",
    });
  } catch (err) {
    yield put({
      type: getEmotionStatusFailure,
      //   data: err.response.data,
    });
  }
}
function* watchLogin() {
  yield takeLatest(loginRequest, logIn);
}

function* watchGetEmotion() {
  yield takeLatest(getEmotionStatusRequest, getEmotion);
}
export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchGetEmotion)]);
}
