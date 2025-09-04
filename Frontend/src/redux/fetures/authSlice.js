// src/redux/fetures/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAdmin, logoutAdmin } from "../../axios/adminAPI";
// import jwtDecode from "jwt-decode";

// ✅ Login action
export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await loginAdmin(data); // API call
      return res.data.user; // server se user return hoga
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

// ✅ Logout action
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await logoutAdmin(); // backend me cookie clear
    return null;
  } catch (err) {
    return null;
  }
});

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ✅ token se user set karne ka option
    setUserFromToken: (state, action) => {
      state.user = action.payload; // { id, role }
      state.error = null;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 Login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })

      // 🔹 Logout case
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { setUserFromToken, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
