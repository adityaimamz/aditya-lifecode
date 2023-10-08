const { User } = require("../models");

exports.registerUser = async (req, res) => {
  try {
    if (req.body.password !== req.body.passwordConfirm) {
      return res.status(400).json({
        message: "Error Validation",
        error: ["Password not match"]
      });
    }
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      message: "Register success",
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
