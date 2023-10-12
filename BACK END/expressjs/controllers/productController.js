const asyncHandler = require("../middleware/asyncHandler");
const { Product } = require("../models");

exports.addProduct = asyncHandler(async (req, res) => {
  let { name, description, price, categoryId, stock } = req.body;

  const file = req.file;
  //validasi jika input file tidak di input
  if (!file) {
    res.status(400);
    throw new Error("Please upload an image");
  }

  const fileName = file.filename;
  const pathImage = `${req.protocol}://${req.get(
    "host"
  )}/public/uploads/${fileName}`;

  const newProduct = await Product.create({
    name,
    description,
    price,
    categoryId,
    stock,
    image: pathImage,
  });

  res.status(200).json({
    data: newProduct,
  });
});

exports.readProduct = asyncHandler(async (req, res) => {
  const products = await Product.findAll();

  return res.status(200).json({
    data: products,
  });
});

exports.detailProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const productData = await Product.findByPk(id);

  if (!productData) {
    res.status(404);
    throw new Error("Product not found");
  }

  return res.status(200).json({
    data: productData,
  });
});
