const express = require('express');
const router = express.Router();
const {addProduct} = require('../controllers/productController');
const {uploadOption} = require("../utils/fileUpload");

//endpoint = POST api/v1/product/
router.post('/', uploadOption.single(`image`), addProduct);

module.exports = router;