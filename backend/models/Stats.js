import mongoose from "mongoose";

const statsSchema = new mongoose.Schema({
  members: { type: Number, default: 0 },
  skills: { type: Number, default: 0 },
  swaps: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
});

export default mongoose.model("Stats", statsSchema);
