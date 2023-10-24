const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware/UserMiddleware");
const {createOrUpdateReview} = require("../controllers/reviewController");

//endpoint /api/v1/review/:productId
router.post("/:productId", authMiddleware, createOrUpdateReview);


module.exports = router;