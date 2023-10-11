const express = require('express');
const router = express.Router();
const {addProduct} = require('../controllers/productController');

const multer = require('multer');
const mulParse = multer();

//endpoint = POST api/v1/product/
router.post('/', mulParse.none(), addProduct);

module.exports = router;