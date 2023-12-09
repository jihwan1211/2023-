import { all, put, takeLatest, call, delay, fork } from "redux-saga/effects";
import { submitPerfumeRatingsRequest, submitPerfumeRatingsSuccess, submitPerfumeRatingsFailure } from "../reducer/perfume";

import axios from "axios";

function getResultAPI(data) {
  console.log("in perfume Saga", data);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  return axios.post("/perfume-survey", { ratedPerfumes: data.ratedPerfumes, emotionCategory: data.emotionCategory }, config);
}

const dummyData = [
  {
    rank: 1,
    ratings: 3.02,
    imgURL: " https://basenotes.com/img/product/26154058-2385-j ",
    name: "dummy1",
  },
  {
    rank: 2,
    ratings: 2.97,
    name: "dummy2",
    imgURL: " https://basenotes.com/img/product/4461653404206-j ",
  },
  {
    rank: 3,
    ratings: 2.77,
    column3: "dummy3sdfasdfabfasbfjbasjfbasjfbj",
    imgURL: " https://basenotes.com/img/product/26150745-5804-j ",
  },

  { rank: 4, rating: 2.27, name: "dummy4", imgURL: "https://basenotes.com/img/product/3381689180929-p" },
];

function* getRecommendResult(action) {
  try {
    yield delay(1000);
    const result = yield call(getResultAPI, action.payload);
    console.log("비동기 result", result.data.result);
    const resultArray = result.data.result.map((jsonString) => JSON.parse(jsonString));
    yield put({
      type: submitPerfumeRatingsSuccess,
      data: resultArray,
      // data: dummyData,
      // data: dummyData,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: submitPerfumeRatingsFailure,
      //   data: err.response.data,
    });
  }
}

function* watchSubmitRatings() {
  yield takeLatest(submitPerfumeRatingsRequest, getRecommendResult);
}
export default function* perfumeSaga() {
  yield all([fork(watchSubmitRatings)]);
}
