"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, CACHE_LIFETIME } from "./constants";
import { isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { refreshToken } from "./helpers";
import { store } from "@/redux/store";
import { toast } from "react-toastify";
import { saveAuth } from "@/redux/reducers/authSlice";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // headers.set(Upgrade, "invalid")
      headers.append("mode", "no-cors");
    // headers.set("Access-Control-Allow-Headers", "X-Requested-With");
      const accessToken = getState().auth.auth.token; // replace with your own selector
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
    onError: (error, queryApi) => {
      console.log(error);
      refreshTokens(error, queryApi);
    },
  }),
  keepUnusedDataFor: CACHE_LIFETIME.TINY,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  if (isRejected()(action)) {
    if (action?.payload?.status === 403) {
      refreshTokens();
    }
  }
  return next(action);
};

const refreshTokens = async () => {
  // Make the API request to refresh the token
  const response = await fetch("https://stashbox-core.victornwadinobi.com/admin/token/refresh", {
    method: "GET",
    headers: {
      Authorization: refreshToken(),
    },
  })
  const data = await response.json()
  if (data.error === 0) {
        store.dispatch(
          saveAuth({
            ...store.getState().auth.auth,
            token: data.token,
            refreshToken: data.refreshToken,
          })
        );
        toast.info("session updated");
      } else {
        toast.error("Session expired please login");
        window.location.replace('/')
      }
};
