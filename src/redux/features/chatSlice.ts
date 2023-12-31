import { apiSlice } from "../services/chatApiSlice";

const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    chatPost: builder.mutation({
        query: ({
          message,
          sender,
        }) => ({
          url: "/webhooks/rest/webhook",
          method: "POST",
          body: {
            message,
            sender,
          },
        }),
      }),

   
 
  }),
});

export const {
    useChatPostMutation,

} = chatApiSlice;

