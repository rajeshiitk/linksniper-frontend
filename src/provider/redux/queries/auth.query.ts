"use client";
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
  // eslint-disable-next-line no-undef
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
    forgotPassword: builder.mutation<any, any>({
      query: (obj) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        body: obj,
      }),
    }),
    updatePassword: builder.mutation<any, any>({
      query: (obj) => ({
        url: `/auth/update-password`,
        method: "PUT",
        body: obj,
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
  useForgotPasswordMutation,
  useUpdatePasswordMutation,
} = authApi;
