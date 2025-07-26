import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "@aws-amplify/auth";
import { API_URL } from "@/lib/constant";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

export const baseQueryWithAuth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  try {
    const session = await fetchAuthSession({ forceRefresh: true });
    const token = session.tokens?.idToken?.toString();

    const user = await getCurrentUser();

    console.log("session : ", session);
    console.log("user : ", user);

    const baseQuery = fetchBaseQuery({
      baseUrl: API_URL,
      prepareHeaders: (headers) => {
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
    });

    return baseQuery(args, api, extraOptions);
  } catch (err) {
    console.error("Auth session error:", err);
    return { error: { status: 401, data: "Unauthorized" } };
  }
};
