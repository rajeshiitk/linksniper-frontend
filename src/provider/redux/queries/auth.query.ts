"use client";
import { ILogin } from "@/validationSchema/login.validation";
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserData {
  name: string;
  email: string;
  password: string;
  image: File;
}

interface UserLoginData {
  email: string;
  password: string;
}

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation<UserData, any>({
      query: (obj) => ({
        url: `/auth/sign-up`,
        method: "POST",
        body: obj,
      }),
    }),
    loginUser: builder.mutation<UserLoginData, any>({
      query: (obj) => ({
        url: `/auth/login`,
        method: "POST",
        body: obj,
      }),
    }),
    userProfile: builder.query({
      query: () => ({
        url: `/auth/profile`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSignUpUserMutation,
  useLoginUserMutation,
  useUserProfileQuery,
} = authApi;
