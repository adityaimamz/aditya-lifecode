const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storeCategory,
  detailCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const {
  authMiddleware,
  permissionUser,
} = require("../middleware/UserMiddleware");
//Routing

//Get all
router.get("/", getAllCategories);

//Detail data
router.get("/:id", authMiddleware, detailCategory);

//Update data
router.put("/:id",authMiddleware, permissionUser("Admin"), updateCategory);

//Create data
router.post("/",authMiddleware, permissionUser("Admin"), storeCategory);

//Delete data
router.delete("/:id",authMiddleware, permissionUser("Admin"), deleteCategory);

router.get("/:nama", (req, res) => {
  res.send(`ini endpoint dari route params ${req.params.nama}`);
});

module.exports = router;