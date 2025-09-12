const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g., Technology, Creative
  title: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number, default: 0 },
  image: { type: String, required: true } // store image URL
});

module.exports = mongoose.model("Skill", skillSchema);
