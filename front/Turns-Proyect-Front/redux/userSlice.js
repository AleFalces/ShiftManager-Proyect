import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuthenticated: false,
  },
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    cancelTurn: (state, action) => {
      state.user.turns = state.user.turns.filter(
        (turn) => turn.turnId !== action.payload
      );
    },
  },
});

export const { userLogin, cancelTurn } = userSlice.actions;
export default userSlice.reducer;
