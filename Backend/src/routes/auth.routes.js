const express = require("express");
const { registerAdmin, loginAdmin, logoutAdmin, changePassword } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.Middleware");

const router = express.Router();

// ✅ Public routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// ✅ Protected routes (admin only)
router.get("/admin", authMiddleware(["admin"]), (req, res) => {
  res.json({
    message: `Welcome ${req.user.role} to the admin panel!`,
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  });
});
router.post("/change-password", authMiddleware(["admin"]), changePassword);

router.post("/logout", authMiddleware(["admin"]), logoutAdmin);

module.exports = router;
