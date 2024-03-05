"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const linkApi = createApi({
  reducerPath: "linkApi",
  // eslint-disable-next-line no-undef
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    generateLink: builder.mutation<any, any>({
      query: (obj) => ({
        url: `/url`,
        method: "POST",
        body: obj,
      }),
    }),
    getAnalytics: builder.mutation<any, any>({
      query: ({ shortId }) => ({
        url: `/url/analytics/${shortId}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGenerateLinkMutation, useGetAnalyticsMutation } = linkApi;
