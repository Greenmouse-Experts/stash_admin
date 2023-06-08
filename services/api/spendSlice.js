"use client";

import { apiSlice } from "../apiSlice";
import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";

export const SpendApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getSpendAnalytics: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_SPEND_ANALYTICS}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
            Authorization: requestAuthorization(),
          },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getAllSpend: builder.query({
      query: (tabId) => ({
        url: `${ENDPOINT.GET_ALL_SPEND}?limit=10&next_cursor=${tabId}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
            Authorization: requestAuthorization(),
          },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

  }),
  overrideExisting: true,
});

export const {
    useGetSpendAnalyticsQuery,
    useGetAllSpendQuery,
    useLazyGetAllSpendQuery,
} = SpendApiSlice
