const express = require('express');
const router = express.Router();
const {addProduct, readProduct, detailProduct} = require('../controllers/productController');
const {uploadOption} = require("../utils/fileUpload");

//Tambah Product
//endpoint = POST api/v1/product/
router.post('/', uploadOption.single(`image`), addProduct);

//Tampil semua data product
//endpoint = GET api/v1/product/
router.get("/", readProduct)

// Detail Product
//endpoint = GET api/v1/product/idUUID
router.get("/:id", detailProduct)

module.exports = router;