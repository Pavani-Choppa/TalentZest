// routes/testimonialRoutes.js
const express = require("express");
const Testimonial = require("../models/Testimonial");
const router = express.Router();

// Get all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add a testimonial (optional, for admin panel later)
router.post("/", async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.json(newTestimonial);
  } catch (err) {
    res.status(500).json({ error: "Failed to add testimonial" });
  }
});

module.exports = router;
