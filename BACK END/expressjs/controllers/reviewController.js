const asyncHandler = require("../middleware/asyncHandler");
const { Review, Product } = require("../models");
const { Sequelize } = require("sequelize");

const avarageRatingProduct = async (idDataProduct) => {
  const resReview = await Review.findOne({
    attributes: [[Sequelize.fn("avg", Sequelize.col("point")), "avarage"]],
    where: {
      productId: idDataProduct,
    },
  });

  const avarage = Number(resReview.dataValues.avarage);

  await Product.update(
    {
      avgReview: avarage,
    },
    {
      where: {
        id: idDataProduct,
      },
    }
  );
};

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

      //tambah nilai 1 di countReview di table profuct
      await Product.increment({countReview: 1}, {where: {id: idProduct}});

    await avarageRatingProduct(idProduct);
    message = "Review updated";
  } else {
    await Review.create({
      productId: idProduct,
      userId: idUser,
      point,
      content,
    });
    await avarageRatingProduct(idProduct);

    message = "Review created";
  }
  return res.status(200).json({
    message: message,
  });
});
