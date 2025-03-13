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
    cancelTurn: (state, action) => {
      state.users.turns = state.users.turns.filter(
        (turn) => turn.turnId !== action.payload
      );
    },
  },
});

export const { userLogin, cancelTurn } = userSlice.actions;
export default userSlice.reducer;
