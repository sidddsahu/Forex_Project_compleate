const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AdminModel = require("../models/auth.model");

// ✅ Register
const registerAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check duplicate email
    AdminModel.findByEmail(email, async (err, results) => {
      if (err) return res.status(500).json({ error: err });
      if (results.length > 0)
        return res.status(400).json({ message: "Email already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      AdminModel.createAdmin(name, email, hashedPassword, role || "admin", (err2) => {
        if (err2) return res.status(500).json({ error: err2 });
        res.json({ message: "Admin registered successfully!" });
      });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Login with cookie
const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  AdminModel.findByEmail(email, async (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0)
      return res.status(401).json({ message: "Invalid email or password" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    // Generate JWT
   const token = jwt.sign(
  { id: user.id, role: user.role, name: user.name, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);


    // ✅ Set token in httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.json({
      message: "Login successful",
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  });
};

// ✅ Logout and clear cookie
const logoutAdmin = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
res.json({
  message: "Login successful",
  // user: { id: user.id, name: user.name, email: user.email, role: user.role },
});

};


// ✅ Change Password
const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.user.id; // middleware se milta hai

  try {
    // 1️⃣ Find admin by ID
    AdminModel.findById(userId, async (err, results) => {
      if (err) return res.status(500).json({ error: err });
      if (results.length === 0)
        return res.status(404).json({ message: "User not found" });

      const user = results[0];

      // 2️⃣ Old password check
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch)
        return res.status(400).json({ message: "Old password is incorrect" });

      // 3️⃣ New password hash
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // 4️⃣ Update password
      AdminModel.updatePassword(userId, hashedPassword, (err2) => {
        if (err2) return res.status(500).json({ error: err2 });
        res.json({ message: "Password updated successfully" });
      });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const db = require("../config/db");

// Find user by email
const findByEmail = (email, callback) => {
  const query = "SELECT * FROM admin_users WHERE email = ?";
  db.query(query, [email], callback);
};

// Create new admin
const createAdmin = (name, email, hashedPassword, role, callback) => {
  const query =
    "INSERT INTO admin_users (name, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, hashedPassword, role], callback);
};

// Delete admin by ID
const deleteAdminById = (id, callback) => {
  const query = "DELETE FROM admin_users WHERE id = ?";
  db.query(query, [id], callback);
};


module.exports = { registerAdmin, loginAdmin, logoutAdmin, changePassword };
