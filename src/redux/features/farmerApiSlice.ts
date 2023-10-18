import { Farmer , EducationLevel, FarmerGroup} from "../../../type";
import { apiSlice } from "../services/apiSlice";

const farmerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveFarmer: builder.query<Farmer, void>({
      query: () => "/farmers/farmer-profile/",
    }),
    
    getEducationLevel: builder.query<EducationLevel[], void>({
      query : () => "/common/education-level/",
    }),

    getFarmerGroup: builder.query<FarmerGroup[], void>({
      query: () => "/farmers/groups/",
    }),
    
    farmerRegister: builder.mutation({
      query: ({
        date_of_birth,
        level_of_education,
        occupation,
        experience,
        farmer_group,
        general_remarks,
        production_scale,
      }) => ({
        url: "/farmers/farmer-profile/",
        method: "POST",
        body: {
          date_of_birth,
          level_of_education,
          occupation,
          experience,
          farmer_group,
          general_remarks,
          production_scale,
        },
      }),
    }),

   
 
  }),
});

export const {
  useRetrieveFarmerQuery,
    useFarmerRegisterMutation,
    useGetEducationLevelQuery,
    useGetFarmerGroupQuery,

} = farmerApiSlice;
