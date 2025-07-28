// src/redux/authSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  idToken: string | null;
  accessToken: string | null;
};

const initialState: AuthState = {
  idToken: null, // For identity verification for custom api calls
  accessToken: null, // For cognito user authentication
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{
        idToken: string;
        accessToken: string;
      }>,
    ) => {
      state.idToken = action.payload.idToken;
      state.accessToken = action.payload.accessToken;
    },
    clearAuth: (state) => {
      state.idToken = null;
      state.accessToken = null;
    },
  },
});

export const { setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
