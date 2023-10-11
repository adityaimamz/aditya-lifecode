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
