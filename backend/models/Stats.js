const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  members: { type: Number, default: 0 },
  skills: { type: Number, default: 0 },
  swaps: { type: Number, default: 0 },
  rating: { type: Number, default: 0 }
});

module.exports = mongoose.model("Stats", StatsSchema);
