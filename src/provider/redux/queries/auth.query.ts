"use client";
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "./types.js";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation<Pokemon, string>({
      query: (obj) => ({
        url: `/auth/sign-up`,
        method: "POST",
        body: obj,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignUpUserMutation } = authApi;
