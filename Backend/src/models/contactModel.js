const db = require("../config/db");

const Contact = {
  // Create new contact message
  create: (data, callback) => {
    const { name, email, service, mobile, message, ip_address } = data;
    const sql = `INSERT INTO contact_messages 
                 (name, email, service, mobile, message, ip_address, created_at) 
                 VALUES (?, ?, ?, ?, ?, ?, NOW())`;
    db.query(sql, [name, email, service, mobile, message, ip_address], callback);
  },

  // Get all contact messages
  getAll: (callback) => {
    const sql = "SELECT * FROM contact_messages ORDER BY created_at DESC";
    db.query(sql, callback);
  },

  // Get contact message by ID
  getById: (id, callback) => {
    const sql = "SELECT * FROM contact_messages WHERE id = ?";
    db.query(sql, [id], callback);
  },

  // Update message status (read/unread)
  updateStatus: (id, status, callback) => {
    const sql = "UPDATE contact_messages SET status = ? WHERE id = ?";
    db.query(sql, [status, id], callback);
  },

  // Delete contact message
  delete: (id, callback) => {
    const sql = "DELETE FROM contact_messages WHERE id = ?";
    db.query(sql, [id], callback);
  },

  // Get messages by date range
  getByDateRange: (startDate, endDate, callback) => {
    const sql = "SELECT * FROM contact_messages WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC";
    db.query(sql, [startDate, endDate], callback);
  }
};

module.exports = Contact;
