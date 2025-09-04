import axios from "axios";

// ✅ Base URL yaha define kar do
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ,
  withCredentials: true, // optional
});

const blogAPI = {
  getAll: () => api.get("/blogs"),
  getById: (id) => api.get(`/blogs/${id}`), // ✅ Added for individual blog fetching
  create: (data) => api.post("/blogs", data),
 update: (id, data) =>
  api.put(`/blogs/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  }),

  delete: (id) => api.delete(`/blogs/${id}`),
};

export default blogAPI;
