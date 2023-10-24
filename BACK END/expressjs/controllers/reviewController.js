const asyncHandler = require("../middleware/asyncHandler");
const { Review } = require("../models");

exports.createOrUpdateReview = asyncHandler(async (req, res) => {
  const idUser = req.user.id;
  const idProduct = req.params.productId;
  const { point, content } = req.body;

  let message = "";

  const myReview = await Review.findOne({
    where: {
      productId: idProduct,
      userId: idUser,
    },
  });

  if (myReview) {
    //update review data
    await Review.update(
      {
        point,
        content,
      },
      {
        where: {
          id: myReview.id,
        },
      }
    );
    message = "Review updated";
  } else {
    await Review.create({
      productId: idProduct,
      userId: idUser,
      point,
      content,
    });
    message = "Review created";
  }
  return res.status(200).json({
    message: message,
  });
});
