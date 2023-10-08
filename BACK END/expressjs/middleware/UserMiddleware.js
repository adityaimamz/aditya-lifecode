const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.authMiddleware = async (req, res, next) => {
  // 1.fungsi di jika di header kita masukan token atau tidak
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      res.status(401).json({
        status: 401,
        message: "Unauthorized",
      })
    );
  }
  // 2. decode token
  let decoded;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return next(
      res.status(401).json({
        error: err,
        message: "Token yang dimasukan tidak valid",
      })
    );
  }

  // 3. ambil data user berdasarkan kondisi decoded
  const currentUser = await User.findByPk(decoded.id);
  //   console.log(currentUser);
  req.user;
  next();
};
