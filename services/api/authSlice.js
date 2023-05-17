"use client";

import { apiSlice } from "../apiSlice";
import * as ENDPOINT from "../constants";
import { refreshToken, requestAuthorization } from "../helpers";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query({
      query: (payload) => ({
        url: `${ENDPOINT.LOGIN}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: {
          message: payload,
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),
    refetchToken: builder.query({
      query: () => ({
        url: `${ENDPOINT.VERIFY_TOKEN}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: refreshToken(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),
    getProfile: builder.query({
      query: () => ({
        url: `${ENDPOINT.GET_PROFILE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),
    editProfile: builder.query({
      query: (payload) => ({
        url: `${ENDPOINT.EDIT_PROFILE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: {
          message: payload,
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),
    updateAdminPassword: builder.query({
      query: (payload) => ({
        url: `${ENDPOINT.CHANGE_PASSWORD}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: {
          message: payload,
        },
      }),
    }),
    overrideExisting: false,
  }),
});

export const {
  refetchToken,
  useLazyLoginQuery,
  useLazyEditProfileQuery,
  useGetProfileQuery,
  useLazyRefetchTokenQuery,
  useRefetchTokenQuery,
  useUpdateAdminPasswordMutation,
  useLazyUpdateAdminPasswordQuery
} = authApiSlice;
