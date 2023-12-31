import { apiSlice } from "../services/apiSlice";

const ServiceProviderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    getServiceProvider: builder.query<ServiceProvider[], void>({
        query : () => `/service-provider/service-providers-list/`,
      }),
      retrieveServiceProvider: builder.query<ServiceProvider, number>({
        query: (id) => `/service-provider/service-providers-list/${id}/`,
      }),

    }),
});
export const {
   useGetServiceProviderQuery,
    useRetrieveServiceProviderQuery,
  
  } = ServiceProviderApiSlice;