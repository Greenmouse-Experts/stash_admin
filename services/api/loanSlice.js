"use client";

import { apiSlice } from "../apiSlice";
import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";

export const loanApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getSaladRate: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_SALAD_RATE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
            Authorization: requestAuthorization(),
          },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getKollectRate: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_KOLLECT_RATE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
            Authorization: requestAuthorization(),
          },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    updateLoanRate: builder.query({
      query: ({type, payload}) => ({
        url: `${ENDPOINT.UPDATE_LOAN_RATE}/${type}`,
        method: ENDPOINT.HTTP_METHODS.PUT,
        body: {
            message: payload,
          },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getAllLoans: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_ALL_LOANS}`,
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
    useGetSaladRateQuery,
    useGetKollectRateQuery,
    useLazyUpdateLoanRateQuery,
    useGetAllLoansQuery
} = loanApiSlice