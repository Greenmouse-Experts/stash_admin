"use client";

import { apiSlice } from "../apiSlice";
import * as ENDPOINT from "../constants";
import { requestAuthorization, requestLocation } from "../helpers";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query({
      query: (payload) => ({
        url: `${ENDPOINT.LOGIN}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: {
          message: payload
        }
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),
    overrideExisting: false,
  }),
});

export const {useLazyLoginQuery} = authApiSlice;
