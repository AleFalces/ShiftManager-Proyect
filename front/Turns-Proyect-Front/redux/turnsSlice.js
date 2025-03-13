import { createSlice } from "@reduxjs/toolkit";

const turnsSlice = createSlice({
  name: "turns",
  initialState: [],
  reducers: {
    allTurns: (state, action) => action.payload,
    removeTurn: (state, action) =>
      state.filter((turn) => turn.turnId !== action.payload),
  },
});

export const { allTurns, removeTurn } = turnsSlice.actions;
export default turnsSlice.reducer;
