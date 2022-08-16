import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: userSlice,
  },
});
