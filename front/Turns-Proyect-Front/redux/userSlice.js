import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {},
    isAuthenticated: false,
  },
  reducers: {
    userLogin: (state, action) => {
      state.users = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
