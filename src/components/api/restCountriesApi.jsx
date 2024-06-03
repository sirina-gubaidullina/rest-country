import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => `all`,
    }),
    getCountryByName: builder.query({
      query: (name) => `name/${name}`,
    }),
    getCountriesByCode: builder.query({
      query: (codes) => `alpha?codes=${codes}`,
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountriesByCodeQuery,
} = countriesApi;
