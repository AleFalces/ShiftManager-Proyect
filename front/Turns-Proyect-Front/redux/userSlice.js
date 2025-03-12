import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
