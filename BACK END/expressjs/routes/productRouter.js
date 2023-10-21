const express = require('express');
const router = express.Router();
const {addProduct, readProduct, detailProduct, updateProduct, deleteProduct} = require('../controllers/productController');
const {uploadOption} = require("../utils/fileUpload");
const {
    authMiddleware,
    permissionUser,
  } = require("../middleware/UserMiddleware");

//Tambah Product
//endpoint = POST api/v1/product/
router.post('/', uploadOption.single(`image`), addProduct);

//Tampil semua data product
//endpoint = GET api/v1/product/
router.get("/", readProduct)

// Detail Product
//endpoint = GET api/v1/product/id
router.get("/:id", detailProduct)

// Update Product
//endpoint = PUT api/v1/product/id
router.put("/:id", uploadOption.single(`image`),authMiddleware, permissionUser("Admin"), updateProduct);

// Delete Product
//endpoint = DELETE api/v1/product/id
router.delete("/:id",authMiddleware, permissionUser("Admin"), deleteProduct);

module.exports = router;