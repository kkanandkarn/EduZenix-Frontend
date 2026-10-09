import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../../../types";

interface AuthStateData {
  authData: AuthState | null;
  isInitialized: boolean;
}

const initialState: AuthStateData = {
  authData: null,
  isInitialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthState>) {
      state.authData = action.payload;
      state.isInitialized = true;
    },
    clearAuthData(state) {
      state.authData = null;
      state.isInitialized = false;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
