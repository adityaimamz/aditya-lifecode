const express = require("express");
const router = express.Router();
const { getAllCategories, storeCategory, detailCategory } = require("../controllers/categoryController");

//Routing
router.get("/", getAllCategories)

//Detail data
router.get('/:id', detailCategory)

router.post("/", storeCategory)

router.get("/:nama", (req, res) => {
  res.send(`ini endpoint dari route params ${req.params.nama}`);
});

module.exports = router;
