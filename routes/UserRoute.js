const express = require("express");
const User = require("../models/UserModel");
const router = express.Router();

// Get user details by email
router.get("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user details", error: error.message });
  }
});

// Create or update user details
router.put("/:email", async (req, res) => {
    const { email } = req.params;
    const updatedDetails = req.body;
  
    try {
      const user = await User.findOneAndUpdate(
        { email }, // Find user by email
        updatedDetails, // Update with new details
        { new: true, upsert: true, runValidators: true } // Create if not found, validate data
      );
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error saving user details", error: error.message });
    }
  });
module.exports = router;