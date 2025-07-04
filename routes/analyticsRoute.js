const express = require("express");
const Sentiment = require("sentiment");

const router = express.Router();
const sentiment = new Sentiment();

// Mock data for reviews
const reviews = [
  "This course was amazing and very helpful!",
  "I didn't like the instructor's teaching style.",
  "The content was good, but the pace was too fast.",
];

// Endpoint for sentiment analysis
router.get("/sentiment", (req, res) => {
  const sentiments = reviews.map((review) => {
    const result = sentiment.analyze(review);
    return {
      review,
      score: result.score,
      comparative: result.comparative,
    };
  });

  const positiveReviews = sentiments.filter((s) => s.score > 0).length;
  const totalReviews = sentiments.length;
  const positiveSentimentPercentage = Math.round((positiveReviews / totalReviews) * 100);

  res.json({
    sentiments,
    totalReviews,
    positiveSentimentPercentage,
  });
});

module.exports = router;