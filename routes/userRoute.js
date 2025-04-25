const express = require("express");
const { getUserDetails, updateUserDetails } = require("../controllers/userController");

const router = express.Router();

// Route to get user details by email
router.get("/:email", getUserDetails);

// Route to update user details
router.put("/:email", updateUserDetails);

module.exports = router;