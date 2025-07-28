import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/lib/constant";

type AuthState = {
  status: "logging-out" | "logged-out" | "logging-in" | "logged-in";
  idToken?: string;
};

export const baseQueryWithAuth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  try {
    const baseQuery = fetchBaseQuery({
      baseUrl: API_URL,
      prepareHeaders: (headers, { getState }) => {
        const idToken = (getState() as { auth: AuthState }).auth.idToken;
        if (idToken) {
          headers.set("Authorization", `Bearer ${idToken}`);
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
