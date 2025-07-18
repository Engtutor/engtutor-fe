// services/baseQuery.ts
import { API_URL } from "@/lib/constant";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = API_URL;

export const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
