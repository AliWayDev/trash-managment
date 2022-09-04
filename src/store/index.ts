import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
