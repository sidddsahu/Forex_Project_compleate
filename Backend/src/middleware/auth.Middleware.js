const jwt = require("jsonwebtoken");

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    // ✅ Cookie se token read karo
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // ✅ Role check
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Forbidden: You don't have permission" });
      }

      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};

module.exports = authMiddleware;
