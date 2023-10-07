const { User } = require("../models");

exports.registerUser = async (req, res) => {
  try {
    let { name, email, password, passwordConfirm } = req.body;
    if (password !== passwordConfirm) {
      return res.status(400).json({
        message: "Password does not match",
      });
    }
    const newUser = await User.create({ name, email, password });
    return res.status(201).json({
      message: "Register success",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Register failed",
      error,
    });
  }
};
