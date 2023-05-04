"use client";

import { apiSlice } from "../apiSlice";
import {
  requestLocation,
  requestAuthorization,
  requestUserId,
} from "../helpers";
import * as ENDPOINT from "../constants";

export const routineApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.query({
      query: (payload) => ({
        url: `${ENDPOINT.UPLOAD_IMAGE}`,
        headers: {
          Authorization: requestAuthorization(),
        },
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getCustomers: builder.query({
        query: () => ({
          url: `${ENDPOINT.GET_ALL_CUSTOMERS}`,
          headers: {
            Authorization: requestAuthorization(),
          },
          method: ENDPOINT.HTTP_METHODS.GET,
          
        }),
        keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
      }),
  }),
  overrideExisting: true,
});

export const { useLazyUploadImageQuery, useGetCustomersQuery, useLazyGetCustomersQuery } = routineApiSlice;
