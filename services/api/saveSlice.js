"use client";

import { apiSlice } from "../apiSlice";
import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";

export const savingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getSavingsRate: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_SAVINGS_RATE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
            Authorization: requestAuthorization(),
          },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.TINY,
    }),

    updateSavingsRate: builder.query({
      query: ({type, payload}) => ({
        url: `${ENDPOINT.UPDATE_SAVINGS_RATE}/${type}`,
        method: ENDPOINT.HTTP_METHODS.PUT,
        body: {
            message: payload,
          },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),
  }),
  overrideExisting: true,
});

export const {
    useGetSavingsRateQuery,
    useLazyUpdateSavingsRateQuery
} = savingsApiSlice