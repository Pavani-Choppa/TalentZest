const Stats = require("../models/Stats");

// Get stats
const getStats = async (req, res) => {
  try {
    const stats = await Stats.findOne();
    if (!stats) {
      return res.json({ members: 0, skills: 0, swaps: 0, rating: 0 });
    }
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
};


// Update stats
const updateStats = async (req, res) => {
  try {
    const { members, skills, swaps, rating } = req.body;
    const stats = await Stats.findOneAndUpdate(
      {}, // find first document
      { members, skills, swaps, rating },
      { new: true, upsert: true }
    );
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: "Failed to update stats" });
  }
};

module.exports = { getStats, updateStats };
