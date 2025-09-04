"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../../../../redux/fetures/blog.Slice";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const BlogAdmin = () => {
  const dispatch = useDispatch();
  const { items: blogs, loading } = useSelector((state) => state.blogs);

  // Add/Edit Blog state
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
    author_name: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [search, setSearch] = useState("");

  // ✅ Loading states for Add/Update
  const [addLoading, setAddLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  // ✅ Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0] || null;
      setFormData({ ...formData, image: file });
      if (file) setPreviewImage(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Add Blog
  const handleCreateBlog = async () => {
    if (!formData.title || !formData.description || !formData.author_name) {
      alert("⚠️ Fill all fields!");
      return;
    }

    setAddLoading(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("author_name", formData.author_name);
      if (formData.image instanceof File) data.append("image", formData.image);

      await dispatch(createBlog(data)).unwrap();
      resetForm();
      dispatch(fetchBlogs());
    } catch (err) {
      alert(err || "Add blog failed!");
    } finally {
      setAddLoading(false);
    }
  };

  // Edit blog
  const handleEditBlog = (blog) => {
    setEditingBlogId(blog.id);
    setFormData({
      image: blog.image,
      title: blog.title,
      description: blog.description,
      author_name: blog.author_name,
    });
    setPreviewImage(blog.image);
  };

  // Update blog
  const handleUpdateBlog = async () => {
    if (!formData.title || !formData.description || !formData.author_name) {
      alert("⚠️ Fill all fields!");
      return;
    }

    setUpdateLoading(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("author_name", formData.author_name);
      if (formData.image instanceof File) data.append("image", formData.image);

      await dispatch(updateBlog({ id: editingBlogId, data })).unwrap();
      resetForm();
      dispatch(fetchBlogs());
    } catch (err) {
      alert(err || "Update failed!");
    } finally {
      setUpdateLoading(false);
    }
  };

  // Delete blog
  const handleDeleteBlog = (id) => {
    dispatch(deleteBlog(id));
  };

  const resetForm = () => {
    setFormData({ image: null, title: "", description: "", author_name: "" });
    setPreviewImage(null);
    setEditingBlogId(null);
  };

  // Filter & paginate
  const filteredBlogs = blogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.author_name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.id - a.id);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left side - Blog List */}
      <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          📑 Blog List ({blogs.length})
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-56 border rounded-md p-2 mb-4"
        />

        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="py-2 px-4 text-left">S/N</th>
                    <th className="py-2 px-4 text-left">Image</th>
                    <th className="py-2 px-4 text-left">Title</th>
                    <th className="py-2 px-4 text-left">Author</th>
                    <th className="py-2 px-4 text-left">Description</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBlogs.length > 0 ? (
                    currentBlogs.map((blog, index) => (
                      <tr key={blog.id} className="border-b">
                        <td className="py-2 px-4">{indexOfFirstBlog + index + 1}</td>
                        <td className="py-2 px-4">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-14 h-12 object-cover shadow-lg hover:scale-110 rounded"
                          />
                        </td>
                        <td className="py-2 px-4">{blog.title}</td>
                        <td className="py-2 px-4">{blog.author_name}</td>
                       <td className="py-2 px-4 w-10">
                            <div
                              className="truncate"
                              dangerouslySetInnerHTML={{
                                __html:
                                  blog.description.length > 40
                                    ? blog.description.substring(0, 40) + "..."
                                    : blog.description,
                              }}
                            />
                          </td>

                        <td className="py-2 px-4 flex gap-2">
                          <button
                            onClick={() => handleEditBlog(blog)}
                            className="bg-blue-500 text-white  px-3 py-1 rounded-md"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(blog.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-3 px-4 text-center text-gray-500">
                        No blogs found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-4 gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                  Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Right side - Add/Edit Blog Form */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          {editingBlogId ? "✏️ Edit Blog" : "➕ Add Blog"}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {/* Image Upload */}
          <div className="flex flex-col items-center justify-center w-full">
            <label
              htmlFor="imageUpload"
              className="flex flex-col items-center justify-center w-full h-30 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16V4m0 0l-4 4m4-4l4 4m6 12V12m0 0l-4 4m4-4l4 4"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag & drop
                </p>
                <p className="text-xs text-gray-400">PNG, JPG, JPEG (max 5MB)</p>
              </div>
              <input
                id="imageUpload"
                type="file"
                name="image"
                className="hidden"
                onChange={handleInputChange}
              />
            </label>
            {previewImage && (
              <img src={previewImage} alt="preview" className="mt-2 w-28 h-20 object-cover rounded" />
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter blog title"
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
           <CKEditor
  editor={ClassicEditor}
  data={formData.description}
  onChange={(event, editor) => {
    const data = editor.getData();
    setFormData({ ...formData, description: data });
  }}
/>

          </div>

          {/* Author */}
          <div>
            <label className="block font-medium">Author Name</label>
            <input
              type="text"
              name="author_name"
              value={formData.author_name}
              onChange={handleInputChange}
              placeholder="Enter author name"
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Buttons with loading */}
          {editingBlogId ? (
            <div className="flex gap-2">
              <button
                onClick={handleUpdateBlog}
                disabled={updateLoading}
                className={`flex-1 ${
                  updateLoading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                } text-white font-semibold py-2 rounded-md flex justify-center items-center`}
              >
                {updateLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    Updating...
                  </>
                ) : (
                  "Update Blog"
                )}
              </button>
              <button
                onClick={resetForm}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={handleCreateBlog}
              disabled={addLoading}
              className={`w-full ${
                addLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold py-2 rounded-md flex justify-center items-center`}
            >
              {addLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                "Add Blog"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
