"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../../../../redux/fetures/blog.Slice";

const AddBlog = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Local loading state
  const [newBlog, setNewBlog] = useState({
    image: null,
    title: "",
    description: "",
    author_name: "",
  });

  // Form validation
  const isFormValid =
    newBlog.image && newBlog.title && newBlog.description && newBlog.author_name;

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewBlog({ ...newBlog, image: files[0] || null });
    } else {
      setNewBlog({ ...newBlog, [name]: value });
    }
  };

  const handleCreateBlog = async () => {
    if (!isFormValid) {
      alert("⚠️ Please fill all fields before saving!");
      return;
    }

    setLoading(true); // Start spinner

    try {
      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("description", newBlog.description);
      formData.append("author_name", newBlog.author_name);
      if (newBlog.image) formData.append("image", newBlog.image);

      await dispatch(createBlog(formData)).unwrap();

      // Reset form & close modal
      setNewBlog({ image: null, title: "", description: "", author_name: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("❌ Error creating blog:", error);
      alert(error || "Something went wrong!");
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
      >
        + Add New Blog
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">
              Add New Blog
            </h3>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter blog title"
                  value={newBlog.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Enter blog description"
                  value={newBlog.description}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Name
                </label>
                <input
                  type="text"
                  name="author_name"
                  placeholder="Enter author name"
                  value={newBlog.author_name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateBlog}
                disabled={loading || !isFormValid}
                className={`${
                  loading || !isFormValid
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                } text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 flex items-center justify-center`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  "Save Blog"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddBlog;
