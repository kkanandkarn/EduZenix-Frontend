import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../../../types";

interface AuthStateData {
  authData: AuthState | null;
  isInitialized: boolean;
  // True after an explicit logout, so the dashboard doesn't treat the missing
  // authData as a hard refresh and refetch the profile (401 -> refresh -> reload).
  isLoggedOut: boolean;
}

const initialState: AuthStateData = {
  authData: null,
  isInitialized: false,
  isLoggedOut: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthState>) {
      state.authData = action.payload;
      state.isInitialized = true;
      state.isLoggedOut = false;
    },
    clearAuthData(state) {
      state.authData = null;
      state.isInitialized = false;
      state.isLoggedOut = true;
    },
    // Drops authData without marking a logout, so the dashboard refetches the
    // profile (e.g. after MFA setup changes the user's details).
    resetAuthData(state) {
      state.authData = null;
      state.isInitialized = false;
      state.isLoggedOut = false;
    },
  },
});

export const { setAuthData, clearAuthData, resetAuthData } =
  authSlice.actions;
export default authSlice.reducer;
