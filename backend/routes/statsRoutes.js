const express = require("express");
const { getStats, updateStats } = require("../controllers/statsController");

const router = express.Router();

router.get("/", getStats);
router.post("/", updateStats);

module.exports = router;
