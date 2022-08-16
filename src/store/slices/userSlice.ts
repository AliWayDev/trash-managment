import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../shared/interfaces/apis/auth";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  } as IUser,

  reducers: {
    checkToken(state, action) {
      if (action.payload?.length !== 0) {
        return (state.token = action.payload);
      }

      return null;
    },
  },
});

export const { checkToken } = userSlice.actions;

export default userSlice.reducer;
