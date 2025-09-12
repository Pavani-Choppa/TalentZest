const express = require("express");
const Skill = require("../models/Skill");
const router = express.Router();

// Get all skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add new skill (for admin/future use)
router.post("/", async (req, res) => {
  try {
    const { category, title, author, rating, image } = req.body;
    const newSkill = new Skill({ category, title, author, rating, image });
    await newSkill.save();
    res.json(newSkill);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
