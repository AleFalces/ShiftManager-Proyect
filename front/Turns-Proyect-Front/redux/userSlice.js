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
    reserveTurn: (state, action) => {
      state.user.turns = [...state.user.turns, action.payload];
    },
    cancelTurn: (state, action) => {
      state.user.turns = state.user.turns.filter(
        (turn) => turn.turnId !== action.payload
      );
    },
    userLogout: (state, action) => {
      state.user = {};
      state.isAuthenticated = false;
    },
  },
});

export const { userLogin, cancelTurn, userLogout, reserveTurn } =
  userSlice.actions;
export default userSlice.reducer;
