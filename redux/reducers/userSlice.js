import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
      userId: 0,
      email: "",
      lastName: "",
      firstName: "",
      token: "",
      refreshToken: "",
      phone_number: "",
      userType: -1,
    }
  };
  
  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      saveUser: (state, action) => {
        state.user = action.payload;
      },
      resetUser: (state) => {
        state.user = initialState.user;
      },
    },
  });
  
  export const { saveUser, resetUser } = userSlice.actions;
  
  export const selectUser = (state) => state.user;
  
  export default userSlice.reducer;