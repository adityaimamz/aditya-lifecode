const { User, Profile, Product, Category } = require("../models");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendTOken = (user, statusCode, res) => {
  const token = signToken(user.id);

  const cookieOption = {
    expire: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("jwt", token, cookieOption);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.registerUser = async (req, res) => {
  try {
    if (req.body.password !== req.body.passwordConfirm) {
      return res.status(400).json({
        message: "Error Validation",
        error: ["Password not match"],
      });
    }
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    createSendTOken(newUser, 201, res);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Register failed",
      error: error.errors.map((err) => err.message),
    });
  }
};

exports.loginUser = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      status: "Fail",
      message: "Error Validation",
      error: "Email and password are required",
    });
  }
  const userData = await User.findOne({ where: { email: req.body.email } });
  if (
    !userData ||
    !(await userData.CorrectPassword(req.body.password, userData.password))
  ) {
    return res.status(400).json({
      status: "Fail",
      message: "Error Login",
      error: "Invalid Email or Password",
    });
  }
  createSendTOken(userData, 200, res);
};

exports.logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    expires: new Date(0),
    httpOnly: true,
  });

  res.status(200).json({
    message: "Logout Success",
  });
};

exports.getMyUser = async (req, res) => {
  const currentUser = await User.findOne({
    where: { id: req.user.id },
    include: [
      {
        model: Profile,
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId"],
        },
      },
      {
        model: Product,
        as: "historyReview", // tambahkan as keyword disini
        attributes: {
          exclude: ["createdAt", "updatedAt", "categoryId"],
        },
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
        ],
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt", "password"],
    },
  });

  if (currentUser) {
    return res.status(200).json({
      data: currentUser,
    });
  }
  return res.status(404).json({
    message: "User not found",
  });
};
