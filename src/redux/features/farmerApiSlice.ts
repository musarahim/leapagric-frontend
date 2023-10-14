import { Farmer } from "../../../type";
import { apiSlice } from "../services/apiSlice";

const farmerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveFarmer: builder.query<Farmer, void>({
      query: () => "/farmers/farmer-profile/",
    }),

    
    farmeRegister: builder.mutation({
      query: ({
        email,
        first_name,
        last_name,
        phone_number,
        alternative_contact,
        gender,
        username,
        password,
        re_password,
      }) => ({
        url: "/users/",
        method: "POST",
        body: {
          email,
          first_name,
          last_name,
          phone_number,
          alternative_contact,
          gender,
          username,
          password,
          re_password,
        },
      }),
    }),

   
 
  }),
});

export const {
  useRetrieveFarmerQuery,
    useFarmeRegisterMutation,

} = farmerApiSlice;
