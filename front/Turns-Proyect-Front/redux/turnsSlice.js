import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turns: [],
};

const turnsSlice = createSlice({
  name: "turns",
  initialState,
  reducers: {
    allTurns: (state, action) => {},
  },
});

export const { allTurn } = turnsSlice.actions;
export default turnsSlice.reducer;
