const express = require("express");
const router = express.Router();
const {
  updateCreateProfile,
  uploadImageProfile,
} = require("../controllers/profileController");
const { authMiddleware } = require("../middleware/UserMiddleware");
const { uploadOption } = require("../utils/fileUpload");

// post endpoint /api/vi/profile
router.post("/", authMiddleware, updateCreateProfile);

router.post(
  "/upload",
  authMiddleware,
  uploadOption.single("image"),
  uploadImageProfile,
);

module.exports = router;
