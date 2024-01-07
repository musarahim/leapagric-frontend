import { chatSlice } from "../services/chatApiSlice";

const chatApiSlice = chatSlice.injectEndpoints({
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

