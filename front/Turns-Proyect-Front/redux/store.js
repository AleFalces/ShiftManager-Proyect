import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import turnsReducer from "./turnsSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    turns: turnsReducer,
  },
});
