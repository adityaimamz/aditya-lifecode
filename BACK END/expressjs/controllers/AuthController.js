const { User } = require("../models");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
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

    const token = signToken(newUser.id);

    return res.status(201).json({
      message: "Register success",
      token,
      data: newUser,
    });
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
  const token = signToken(userData.id);
  return res.status(200).json({
    status: "Success",
    message: "Login success",
    token,
  });
};
