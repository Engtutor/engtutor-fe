import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from './type';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getUser: builder.query<User[], void>({
            query: () => 'user',
        }),
    }),
});

export const { useGetUserQuery } = api;
