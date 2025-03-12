import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.users = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
