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

    getLoansRate: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_ALL_LOAN_RATE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
            Authorization: requestAuthorization(),
          },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getExportData: builder.query({
      query: () => ({
        url: `${ENDPOINT.EXPORT_LOAN_DETAILS}`,
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

    updateLoanStatus: builder.query({
      query: (payload) => ({
        url: `${ENDPOINT.UPDATE_LOAN_STATUS}/${payload.type}/${payload.id}/status`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
            Authorization: requestAuthorization(),
          },
          body: {
            message: payload.msg,
          },
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
    useGetSaladRateQuery,
    useGetLoansRateQuery,
    useGetKollectRateQuery,
    useLazyUpdateLoanRateQuery,
    useGetAllLoansQuery,
    useLazyUpdateLoanStatusQuery,
    useGetExportDataQuery
} = loanApiSlice