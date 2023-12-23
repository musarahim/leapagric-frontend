import { apiSlice } from "../services/apiSlice";

const ServiceProviderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    getServiceProvider: builder.query<ServiceProvider[], void>({
        query : () => `/service-provider/service-providers-list/`,
      }),

    }),
});
export const {
   useGetServiceProviderQuery,
  
  } = ServiceProviderApiSlice;