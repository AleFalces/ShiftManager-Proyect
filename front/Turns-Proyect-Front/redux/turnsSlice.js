import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turns: [],
};

const turnsSlice = createSlice({
  name: "turns",
  initialState,
  reducers: {
    allTurns: (state, action) => {
      state.turns = action.payload;
    },
  },
});

export const { allTurns } = turnsSlice.actions;
export default turnsSlice.reducer;
