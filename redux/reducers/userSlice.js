import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      
  };
  
  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      saveUser: (state, action) => {
        state.user = action.payload;
      },
    },
  });
  
  export const { saveUser, resetUser } = userSlice.actions;
  
  export const selectUser = (state) => state;
  
  export default userSlice.reducer;