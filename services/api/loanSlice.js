"use client";

import { apiSlice } from "../apiSlice";
import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";

export const loanApiSlice = apiSlice.injectEndpoints({
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

    updateLoanRate: builder.query({
      query: ({id, payload}) => ({
        url: `${ENDPOINT.UPDATE_LOAN_RATE}/${id}`,
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
    useLazyUpdateLoanRateQuery
} = loanApiSlice