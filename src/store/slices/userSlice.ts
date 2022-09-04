import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../shared/interfaces/apis/auth";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  } as IUser,

  reducers: {
    checkToken: (state, action) => {
      window.localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
  },
});

export const { checkToken } = userSlice.actions;

export default userSlice.reducer;
