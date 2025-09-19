// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `products`,
    }),

    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),

    postProduct: builder.mutation({
      query: (formData) => ({
        url: `products/add`,
        method: "POST",
        body: formData,
      }),
    }),

    addToCart: builder.mutation({
      query: (formData) => ({
        url: `carts/add`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductQuery,
  useGetProductByIdQuery,
  usePostProductMutation,
  useAddToCartMutation,
} = productApi;
