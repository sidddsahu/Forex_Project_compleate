const Blog = require("../models/blogModel");

// ✅ Get all blogs
const getAllBlogs = (req, res) => {
  Blog.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// ✅ Get blog by ID
const getBlogById = (req, res) => {
  const { id } = req.params;
  Blog.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: "Blog not found" });
    res.json(results[0]);
  });
};

// ✅ Create new blog with image
const createBlog = (req, res) => {
  try {
    const newBlog = {
      image: req.file?.path || null,          // 👈 correct field
      title: req.body.title,
      description: req.body.description,      // 👈 DB ke hisaab se
      author_name: req.body.author_name,
    };

    Blog.create(newBlog, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId, ...newBlog });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update blog
// ✅ Update blog
const updateBlog = (req, res) => {
  try {
    const { id } = req.params;

    const updateData = {
      title: req.body.title,
      description: req.body.description,
      author_name: req.body.author_name,
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    // agar image nahi aayi, to old wali rehne do
    Blog.getById(id, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      if (results.length === 0) return res.status(404).json({ message: "Blog not found" });

      const existingBlog = results[0];
      if (!updateData.image) {
        updateData.image = existingBlog.image; // old image retain karo
      }

      Blog.update(id, updateData, (err2) => {
        if (err2) return res.status(500).json({ error: err2 });
        res.json({ message: "Blog updated", id, ...updateData });
      });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ✅ Delete blog
const deleteBlog = (req, res) => {
  const { id } = req.params;
  Blog.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Blog deleted", id });
  });
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
