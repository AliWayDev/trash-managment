import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
