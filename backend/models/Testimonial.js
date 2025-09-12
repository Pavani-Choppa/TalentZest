// models/Testimonial.js
const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  message: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: "Community Member" },
  image: { type: String, required: true }
});

module.exports = mongoose.model("Testimonial", TestimonialSchema);
