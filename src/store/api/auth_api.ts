import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../config/constants';

export const AuthApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    signIn: build.mutation({
      query: ({ ...body }) => ({
        url: '/auth/signin',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useSignInMutation } = AuthApi;
