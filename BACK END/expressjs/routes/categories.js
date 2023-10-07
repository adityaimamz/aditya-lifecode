const express = require("express");
const router = express.Router();
const { getAllCategories, storeCategory, detailCategory, updateCategory } = require("../controllers/categoryController");

//Routing

//Get all
router.get("/", getAllCategories)

//Detail data
router.get('/:id', detailCategory)

//Update data
router.put("/:id", updateCategory)

//Create data
router.post("/", storeCategory)

router.get("/:nama", (req, res) => {
  res.send(`ini endpoint dari route params ${req.params.nama}`);
});

module.exports = router;
