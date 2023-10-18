const asyncHandler = require("../middleware/asyncHandler");
const { Profile } = require("../models");

exports.updateCreateProfile = asyncHandler(async (req, res) => {
  const { age, bio, address } = req.body;

  const idUser = req.user.id;

  const userData = await Profile.findOne({
    where: {
      userId: idUser,
    },
  });
  let message = "";
  if (userData) {
    await Profile.update(
      {
        age: age || userData.age,
        bio: bio || userData.bio,
        address: address || userData.address,
      },
      {
        where: {
          userId: idUser,
        },
      }
    );
    message = "Profile updated";
  } else {
    await Profile.create({
      age,
      bio,
      address,
      userId: idUser,
    });

    message = "Profile created";
  }

  return res.status(201).json({
    message: message
  })
});
