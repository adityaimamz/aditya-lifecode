const asyncHandler = require("../middleware/asyncHandler");
const {Review} = require("../models");

exports.createReview = asyncHandler(async (req, res) => {
    const idUser = req.user.id;
    const idProduct = req.params.productId;
    const {point, content} = req.body;

    await Review.create({
        productId: idProduct,
        userId: idUser,
        point,
        content
    })
})