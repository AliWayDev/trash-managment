import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
});
