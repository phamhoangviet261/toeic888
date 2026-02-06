import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  isAuthenticated: boolean;
  userId: string | null;
  email: string | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  userId: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated(
      state,
      action: PayloadAction<{ userId: string; email: string | null }>
    ) {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    },
    clearAuth(state) {
      state.isAuthenticated = false;
      state.userId = null;
      state.email = null;
    },
  },
});

export const { setAuthenticated, clearAuth } = authSlice.actions;
export default authSlice.reducer;
