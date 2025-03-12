import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {},
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
