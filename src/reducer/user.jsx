import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginLoading: false,
  loginDone: true,
  loginError: null,
  getEmotionStatusLoading: false,
  getEmotionStatusDone: false,
  getEmotionStatusError: null,
  me: null,
  emotion: null,
  emotionSentence: "",
};

const dummyUser = (data) => ({
  emotion: data,
});

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      // console.log("alsdnkanskj");
      state.loginLoading = true;
    },
    loginSuccess: (state, action) => {
      state.loginLoading = false;
      state.loginDone = true;
    },
    loginFaliure: (state, action) => {
      state.loginLoading = false;
      state.loginError = action.err;
    },
    getEmotionStatusRequest: (state, action) => {
      state.getEmotionStatusLoading = true;
      state.emotionSentence = action.payload;
      state.getEmotionStatusDone = false;
      state.emotion = null;
      // console.log(action.payload);
    },
    getEmotionStatusSuccess: (state, action) => {
      state.getEmotionStatusLoading = false;
      state.getEmotionStatusDone = true;
      state.emotion = action.data;
      // me.emotion = action.data;
    },
    getEmotionStatusFailure: (state, action) => {
      state.getEmotionStatusLoading = false;
      state.getEmotionStatusError = action.err;
    },
    changeEmotionStatusRequest: (state, action) => {
      state.emotion = action.payload;
    },
  },
});

export const { loginRequest, loginFaliure, loginSuccess, getEmotionStatusSuccess, getEmotionStatusRequest, getEmotionStatusFailure, changeEmotionStatusRequest } = userSlice.actions;
export default userSlice;
