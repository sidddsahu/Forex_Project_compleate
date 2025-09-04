import axios from "axios";

// Base URL for API calls
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  withCredentials: true,
});

const contactAPI = {
  // Send contact form data
  sendMessage: (contactData) => api.post("/contact/send", contactData),
  
  // Test email configuration (development only)
  testEmail: () => api.get("/contact/test-email"),
};

export default contactAPI;
