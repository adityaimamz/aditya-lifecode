const express = require("express");
const router = express.Router();
const { getAllCategories, storeCategory } = require("../controllers/categoryController");

//Routing
router.get("/", getAllCategories)

router.post("/", storeCategory)

router.get("/:nama", (req, res) => {
  res.send(`ini endpoint dari route params ${req.params.nama}`);
});

module.exports = router;
