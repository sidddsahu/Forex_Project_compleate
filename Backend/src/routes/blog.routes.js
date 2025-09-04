const express = require("express");
const blogRoutes = express.Router();
const blogController = require("../controllers/blog.controller");
const upload = require("../middleware/upload"); // ✅ multer + cloudinary middleware import

blogRoutes.get("/", blogController.getAllBlogs);
blogRoutes.get("/:id", blogController.getBlogById);
blogRoutes.post("/", upload.single("image"), blogController.createBlog);
blogRoutes.put("/:id", upload.single("image"), blogController.updateBlog);

blogRoutes.delete("/:id", blogController.deleteBlog);

module.exports = blogRoutes;
