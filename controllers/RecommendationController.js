// recommendationController.js
const Course = require('../models/Course.js');

// Sample function to recommend courses (This can be customized further with AI logic)
const recommendCourses = async (req, res) => {
  try {
    const userPreferences = req.user.preferences; // Assuming preferences are saved on user object
    const recommendedCourses = await Course.find({
      department: { $in: userPreferences.departments },
      difficulty: { $lte: userPreferences.maxDifficulty },
    });
    
    res.json(recommendedCourses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recommended courses", error });
  }
};
module.exports = { recommendCourses };