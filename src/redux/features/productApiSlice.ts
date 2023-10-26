import { apiSlice } from "../services/apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
  
    getProducts: builder.query<ProductList, void>({
      query : () => `/market/products/`,
    }),
    retrieveProduct: builder.query<Product, number>({
      query: (id) => `/market/products/${id}/`,
    }),


   
 
  }),
});

export const {
  useGetProductsQuery,
  useRetrieveProductQuery,
} = productApiSlice;
