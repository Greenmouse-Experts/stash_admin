import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    userId: 0,
    email: "",
    lastName: "",
    firstName: "",
    token: "",
    refreshToken: "",
    phone_number: "",
    photo: "",
    userType: -1,
    timeStamp: 0,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveAuth: (state, action) => {
      state.auth = action.payload;
    },
    resetAuth: (state) => {
      state.auth = initialState.auth;
    },
  },
});

export const { saveAuth, resetAuth } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
