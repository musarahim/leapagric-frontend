import { apiSlice } from "../services/apiSlice";

const ExtensionWorkersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    getExtensionWorkers: builder.query<ExtensionWorkerResponse, void>({
        query : () => `/extension-workers/extension-workers/`,
      }),

    }),
});
export const {
   useGetExtensionWorkersQuery,
  
  } = ExtensionWorkersApiSlice;