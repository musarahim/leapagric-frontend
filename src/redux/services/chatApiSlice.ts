import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// create a new mutex
const baseQuery = fetchBaseQuery({ 
    baseUrl: `http://localhost:5005`,
    credentials: "include",
});


export const chatSlice = createApi({
  reducerPath: "webhooks",
  baseQuery: baseQuery,
  endpoints: builder => ({}),
});