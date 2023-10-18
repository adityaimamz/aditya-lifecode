const express = require("express");
const router = express.Router();
const { updateCreateProfile } = require("../controllers/profileController");
const { authMiddleware } = require("../middleware/UserMiddleware");

// post endpoint /api/vi/profile
router.post("/", authMiddleware, updateCreateProfile);

module.exports = router;
