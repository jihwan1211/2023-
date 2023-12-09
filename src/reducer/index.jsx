import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userSlice from "./user";
import rootSaga from "../sagas";
import perfumeSlice from "./perfume";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  perfume: perfumeSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
