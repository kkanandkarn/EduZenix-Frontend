import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: "",
  email: "",
  role: "",
  tenantId: null,
  tenantName: "",
  tenantLogo: "",
  token: "",
  globalPermissions: [],
  theme: "dark",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const {
        id,
        name,
        email,
        role,
        tenantId,
        tenantName,
        tenantLogo,
        token,
        globalPermissions,
        theme,
      } = action.payload;

      state.id = id;
      state.name = name;
      state.email = email;
      state.role = role;
      state.tenantId = tenantId;
      state.tenantName = tenantName;
      state.tenantLogo = tenantLogo;
      state.token = token;
      state.globalPermissions = globalPermissions || [];
      state.theme = theme;
    },

    logout(state) {
      state.id = null;
      state.name = "";
      state.email = "";
      state.role = "";
      state.tenantId = null;
      state.tenantName = "";
      state.tenantLogo = "";
      state.token = "";
      state.globalPermissions = [];
      state.theme = "dark";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
