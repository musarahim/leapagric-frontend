import { apiSlice } from "../services/apiSlice";

const commonApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDistricts: builder.query<District[], void>({
      query: () => "/common/districts/",
    }),
    
    getSectors: builder.query<Sector[], void>({
      query : () => "/common/sectors/",
    }),

    getRegions: builder.query<Region[], void>({
      query: () => "/common/regions/",
    }),
    
    getCrops: builder.query<Crop[], void>({
        query: () => "/common/crops/",
      }),
    retrieveCrop :  builder.query<Crop, number>({
      query: (id) => `/common/crops/${id}/`,
    }),
   
 
  }),
});

export const {
    useGetDistrictsQuery,
    useGetSectorsQuery,
    useGetRegionsQuery,
    useGetCropsQuery,
    useRetrieveCropQuery,

} = commonApiSlice;
