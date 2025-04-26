// routes/dashboardRoutes.js
const express = require("express");
const authMiddleware = require("../middlewares/AuthMiddleware"); // ensure this middleware is correctly defined and exported
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

module.exports = router;
