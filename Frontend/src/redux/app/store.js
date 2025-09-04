import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../fetures/blog.Slice";
import contactReducer from "../fetures/contactSlice";
import authReducer from "../../redux/fetures/authSlice"; // ✅ auth slice import

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    contact: contactReducer,
    auth: authReducer, // ✅ auth state add
  },
});

export default store;
