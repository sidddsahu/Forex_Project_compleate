// src/store/blogSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogAPI from "../../axios/blogAPI";


// ✅ Thunks
export const fetchBlogs = createAsyncThunk("blogs/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const res = await blogAPI.getAll();
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to fetch blogs");
  }
});

export const fetchBlogById = createAsyncThunk("blogs/fetchById", async (id, { rejectWithValue }) => {
  try {
    const res = await blogAPI.getById(id);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to fetch blog details");
  }
});

export const createBlog = createAsyncThunk("blogs/create", async (blogData, { rejectWithValue }) => {
  try {
    const res = await blogAPI.create(blogData);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to create blog");
  }
});

export const updateBlog = createAsyncThunk("blogs/update", async ({ id, data }, { rejectWithValue }) => {
  try {
    const res = await blogAPI.update(id, data);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to update blog");
  }
});

export const deleteBlog = createAsyncThunk("blogs/delete", async (id, { rejectWithValue }) => {
  try {
    await blogAPI.delete(id);
    return id;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to delete blog");
  }
});


// ✅ Slice
const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    items: [],          // All blogs
    currentBlog: null,  // Single blog detail
    loading: false,
    error: null,
  },
  reducers: {
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Blog By ID
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentBlog = null;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBlog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Blog
      .addCase(createBlog.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Update Blog
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.items.findIndex((b) => b.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Delete Blog
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.items = state.items.filter((b) => b.id !== action.payload);
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearCurrentBlog, clearError } = blogSlice.actions;
export default blogSlice.reducer;
