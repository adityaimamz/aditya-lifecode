const asyncHandler = require("../middleware/asyncHandler")
const {Product} = require("../models")

exports.addProduct = asyncHandler(async (req, res) => {
    let {name, description, price, categoryId, stock, image } = req.body

    const newProduct = await Product.create({
        name,
        description,
        price,
        categoryId,
        stock,
        image
    })
})