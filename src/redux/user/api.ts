import { createApi } from '@reduxjs/toolkit/query/react';
import type { User } from './type';
import { baseQueryWithAuth } from '../baseQuery';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getUser: builder.query<User[], void>({
            query: () => 'user', //  endpoint: GET /user
        }),
        updateUser: builder.mutation<User, Partial<User>>({
            query: (user) => ({
                url: `user/${user.id}`,
                method: 'PUT',
                body: user,
            }),
        }),
    }),
});

export const { useGetUserQuery, useUpdateUserMutation } = api;
