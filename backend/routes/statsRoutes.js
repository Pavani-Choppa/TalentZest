import express from "express";
import { getStats, updateStats } from "../controllers/statsController.js";

const router = express.Router();

// GET stats
router.get("/", getStats);

// POST/PUT update stats
router.put("/", updateStats);

export default router;
