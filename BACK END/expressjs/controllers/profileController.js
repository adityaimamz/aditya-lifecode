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
    message: message,
  });
});

exports.uploadImageProfile = asyncHandler(async (req, res) => {
  const idUser = req.user.id;

  const ProfileData = await Profile.findOne({
    where: {
      userId: idUser,
    },
  });

  if (!ProfileData) {
    return res.status(404).json({
      message: "Profile not found",
    });
  }

  const file = req.file;
  if (ProfileData.image) {
    const imageName = ProfileData.image.replace(
      `${req.protocol}://${req.get("host")}/public/uploads/`
    );
    const pathFileImage = `./public/uploads/${imageName}`;
    fs.unlinkSync(pathFileImage, (err) => {
      res.status(400);
      throw new Error("Image not found");
    });
  }
  if (!file) {
    res.status(400);
    throw new Error("Image belum diinput");
  }

  const fileNewImage = file.filename;
  const pathImage = `${req.protocol}://${req.get(
    "host"
  )}/public/uploads/${fileNewImage}`;

  await Profile.update(
    {
      image: pathImage,
    },
    {
      where: {
        id: ProfileData.id,
      },
    }
  );
  return res.status(201).json({
    message: "Profile updated",
  });
});
