const jwt = require("jsonwebtoken");
const User = require('../models/User');

exports.isAuth = async (req, res) => {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      return true;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};