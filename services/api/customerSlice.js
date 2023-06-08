"use client";

import { apiSlice } from "../apiSlice";
import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";

export const CustomerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getCustomerSpend: builder.query({
      query: (id) => ({
        url: `${ENDPOINT.GET_CUSTOMER_SPEND}/${id}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
            Authorization: requestAuthorization(),
          },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.TINY,
    }),

  }),
  overrideExisting: true,
});

export const {
    useGetCustomerSpendQuery,
    useLazyGetCustomerSpendQuery,
} = CustomerApiSlice