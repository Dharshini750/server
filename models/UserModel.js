const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, default: "" },
  age: { type: Number, default: null },
  gender: { type: String, default: "" },
  education: { type: String, default: "" },
  college: { type: String, default: "" },
  skills: { type: [String], default: [] },
  preferences: { type: [String], default: [] },
  courses: { type: [String], default: [] },
});

module.exports = mongoose.model("User", userSchema);