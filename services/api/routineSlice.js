"use client";

import { apiSlice } from "../apiSlice";
import * as ENDPOINT from "../constants";

export const routineApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.query({
      query: (payload) => ({
        url: `${ENDPOINT.UPLOAD_IMAGE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getCustomers: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_ALL_CUSTOMERS}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.TINY,
    }),

    getCustomerDetail: builder.query({
      query: (id) => ({
        url: `${ENDPOINT.GET_CUSTOMER_DETAIL}/${id}/view`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    flagAccount: builder.query({
      query: ({id, payload}) => ({
        url: `${ENDPOINT.FLAG_USER}/${id}`,
        method: ENDPOINT.HTTP_METHODS.PUT,
        body: {
          message: payload,
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    unflagAccount: builder.query({
      query: ({id, payload}) => ({
        url: `${ENDPOINT.UNFLAG_USER}/${id}`,
        method: ENDPOINT.HTTP_METHODS.PUT,
        body: {
          message: payload,
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getFlagged: builder.query({
      query: (id) => ({
        url: `${ENDPOINT.GET_ALL_FLAGGED}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    restrictSingle: builder.query({
      query: (id) => ({
        url: `${ENDPOINT.RESTRICT_SINGLE_WALLET}/${id}`,
        method: ENDPOINT.HTTP_METHODS.PUT,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    restrictAll: builder.query({
      query: ({id, payload}) => ({
        url: `${ENDPOINT.RESTRICT_ALL_WALLET}/${id}`,
        method: ENDPOINT.HTTP_METHODS.PUT,
        body: {
          message: payload,
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    unRestrictSingle: builder.query({
      query: (id) => ({
        url: `${ENDPOINT.UNRESTRICT_SINGLE_WALLET}/${id}`,
        method: ENDPOINT.HTTP_METHODS.PUT,

      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    unRestrictAll: builder.query({
      query: ({id, payload}) => ({
        url: `${ENDPOINT.UNRESTRICT_ALL_WALLET}/${id}`,
        method: ENDPOINT.HTTP_METHODS.PUT,
        body: {
          message: payload,
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getRestricted: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_ALL_RESTRICTED}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    deactvateCustomer: builder.query({
      query: (id) => ({
        url: `${ENDPOINT.DEACTIVATE_USER}/${id}`,
        method: ENDPOINT.HTTP_METHODS.PUT,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    actvateCustomer: builder.query({
      query: (id) => ({
        url: `${ENDPOINT.ACTIVATE_USER}/${id}`,
        method: ENDPOINT.HTTP_METHODS.PUT,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getDeactivated: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_ALL_DEACTIVATED}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getAnalysis: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_ANALYSIS}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

  }),
  overrideExisting: true,
});

export const {
  useLazyUploadImageQuery,
  useGetCustomersQuery,
  useLazyGetCustomersQuery,
  useGetCustomerDetailQuery,
  useLazyFlagAccountQuery,
  useLazyUnflagAccountQuery,
  useLazyRestrictAllQuery,
  useLazyUnRestrictAllQuery,
  useLazyRestrictSingleQuery,
  useLazyUnRestrictSingleQuery,
  useLazyActvateCustomerQuery,
  useLazyDeactvateCustomerQuery,
  useGetDeactivatedQuery,
  useGetRestrictedQuery,
  useGetFlaggedQuery,
  useGetAnalysisQuery
} = routineApiSlice;
