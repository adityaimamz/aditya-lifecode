const asyncHandler = require("../middleware/asyncHandler");
const { Product } = require("../models");
const fs = require("fs");
const {Op} = require("sequelize");

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

  const {search} = req.query

  let ProductData = ""

  if(search){
     const products = await Product.findAll({
       where:{
         name:{
           [Op.like]: "%" + search + "%"
         }
       }
     })

     ProductData = products
  } else {
    const products = await Product.findAll();
    
    ProductData = products
  }

  return res.status(200).json({
    data: ProductData,
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

exports.updateProduct = asyncHandler(async (req, res) => {
  // request params & body
  const idParams = req.params.id;
  let { name, description, price, categoryId, stock } = req.body;

  //get data by ID
  const productData = await Product.findByPk(idParams);

  //condition if product not found
  if (!productData) {
    res.status(404);
    throw new Error("Product not found");
  }

  // req file
  const file = req.file;

  //condition if image file changed
  if (file) {
    const imageName = productData.image.replace(
      `${req.protocol}://${req.get("host")}/public/uploads/`,
      ""
    );
    const pathFileImage = `./public/uploads/${imageName}`;
    fs.unlinkSync(pathFileImage, (err) => {
      res.status(400);
      throw new Error("Image not found");
    });

    const fileName = file.filename;
    const pathImage = `${req.protocol}://${req.get(
      "host"
    )}/public/uploads/${fileName}`;

    productData.image = pathImage;
  }

  productData.name = name || productData.name;
  productData.description = description || productData.description;
  productData.price = price || productData.price;
  productData.categoryId = categoryId || productData.categoryId;
  productData.stock = stock || productData.stock;

  productData.save();

  return res.status(200).json({
    message: "Product updated",
    data: productData,
  });
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const productData = await Product.findByPk(id);

  if (productData) {
    const imageName = productData.image.replace(
      `${req.protocol}://${req.get("host")}/public/uploads/`,
      ""
    );
    const pathFileImage = `./public/uploads/${imageName}`;

    fs.unlinkSync(pathFileImage, (err) => {
      res.status(400);
      throw new Error("Image not found");
    });

    productData.destroy();

    return res.status(200).json({
      message: "Product deleted",
    })

  } else {
    res.status(404);
    throw new Error("Product not found");
  }

});
