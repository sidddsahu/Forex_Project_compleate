const db = require("../config/db");

// Find user by email
const findByEmail = (email, callback) => {
  const query = "SELECT * FROM admin_users WHERE email = ?";
  db.query(query, [email], callback);
};

// Create new admin
const createAdmin = (name, email, hashedPassword, role, callback) => {
  const query = "INSERT INTO admin_users (name, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, hashedPassword, role], callback);
};

// Delete admin by ID
const deleteAdminById = (id, callback) => {
  const query = "DELETE FROM admin_users WHERE id = ?";
  db.query(query, [id], callback);
};

// Find user by ID
const findById = (id, callback) => {
  const query = "SELECT * FROM admin_users WHERE id = ?";
  db.query(query, [id], callback);
};

// Update password
const updatePassword = (id, newPassword, callback) => {
  const query = "UPDATE admin_users SET password = ? WHERE id = ?";
  db.query(query, [newPassword, id], callback);
};

module.exports = { findByEmail, createAdmin, deleteAdminById, findById, updatePassword };


