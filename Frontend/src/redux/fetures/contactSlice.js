import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactAPI from "../../axios/contactAPI";

// ✅ Thunk - Send contact form data
export const sendContact = createAsyncThunk(
  "contact/send",
  async (contactData, { rejectWithValue }) => {
    try {
      const res = await contactAPI.create(contactData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContact.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendContact.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
