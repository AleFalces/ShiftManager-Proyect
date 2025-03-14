import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usa localStorage
import userReducer from "./userSlice";
import turnsReducer from "./turnsSlice";

// Configuración de persistencia
const persistConfig = {
  key: "root",
  storage, // Guarda en localStorage
};

// Reducer combinado
const rootReducer = (state = {}, action) => ({
  users: userReducer(state.users, action),
  turns: turnsReducer(state.turns, action),
});

// Aplicamos persistencia al reducer combinado
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
