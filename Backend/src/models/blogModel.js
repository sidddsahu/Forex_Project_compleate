// models/blogModel.js
const db = require("../config/db");

const Blog = {
  // ✅ Get all blogs
  getAll: (callback) => {
    const sql = "SELECT * FROM blogs ORDER BY created_at DESC";
    db.query(sql, callback);
  },

  // ✅ Get blog by ID
  getById: (id, callback) => {
    const sql = "SELECT * FROM blogs WHERE id = ?";
    db.query(sql, [id], callback);
  },

  // ✅ Create new blog
  create: (data, callback) => {
    const { image, title, description, author_name } = data;
    const sql = "INSERT INTO blogs (image, title, description, author_name) VALUES (?, ?, ?, ?)";
    db.query(sql, [image, title, description, author_name], callback);
  },

  // ✅ Update blog
  update: (id, data, callback) => {
    const { image, title, description, author_name } = data;
    const sql = "UPDATE blogs SET image = ?, title = ?, description = ?, author_name = ? WHERE id = ?";
    db.query(sql, [image, title, description, author_name, id], callback);
  },

  // ✅ Delete blog
  delete: (id, callback) => {
    const sql = "DELETE FROM blogs WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Blog;
