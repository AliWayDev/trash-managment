import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILogin, IUser } from "./../../shared/interfaces/apis/auth";

export const authApi = createApi({
  reducerPath: "reqres/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),
  endpoints: (build) => ({
    login: build.mutation<IUser, ILogin>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
