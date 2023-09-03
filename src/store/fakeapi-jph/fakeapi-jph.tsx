import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Users } from '../../types/fakeapi.td';

export const jphapi = createApi({
  reducerPath: 'jsonplaceholder',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (build) => ({
    search: build.query<Users, string | null>({
      query: (searchParam) => ({
        url: '/users',
        params: searchParam
          ? {
              //   _start: 0,
              //   _limit: 3,
              name: searchParam,
            }
          : {},
      }),
      //   transformResponse: (response: Users) =>
      //     response.map((items) => items.name),
    }),
  }),
});

export const { useSearchQuery } = jphapi;
