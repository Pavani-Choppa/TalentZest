import Stats from "../models/Stats.js";

// Get stats
export const getStats = async (req, res) => {
  try {
    const stats = await Stats.findOne(); // assuming only one document
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
};

// Update stats (if needed later for admin)
export const updateStats = async (req, res) => {
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
