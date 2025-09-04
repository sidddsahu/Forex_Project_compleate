const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blog.routes");
const contactRoutes = require("./routes/contact.routes");
const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
require("./config/db"); // Initialize database connection


const allowedOrigins = [
  
];


app.use(cors({
  origin: process.env.FRONTEND_URL || allowedOrigins,    
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// ===============  Middleware for API routes =================

app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

// Global error handler (must be last middleware)
app.use(errorHandler);

module.exports = app;
