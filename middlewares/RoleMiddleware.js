const express = require("express");
const authMiddleware = require("../middlewares/AuthMiddleware");
const roleMiddleware = require("../middlewares/RoleMiddleware");
const router = express.Router();

router.get(
  "/student-dashboard",
  authMiddleware,
  roleMiddleware(["student"]),
  (req, res) => {
    res.json({ message: "Welcome to the student dashboard!" });
  }
);

router.get(
  "/admin-dashboard",
  authMiddleware,
  roleMiddleware(["admin"]),
  (req, res) => {
    res.json({ message: "Welcome to the admin dashboard!" });
  }
);

// Instructor Dashboard Route
router.get(
  "/instructor-dashboard",
  authMiddleware,
  roleMiddleware(["instructor"]),
  (req, res) => {
    res.json({
      message: "Welcome to the instructor dashboard!",
      analytics: {
        totalCourses: 5,
        totalStudents: 120,
        averageRating: 4.6,
      },
    });
  }
);

module.exports = router;