const User = require('../models/User');
const Recipe = require('../models/Recipe');
const redisHelper = require('../helpers/redis');

exports.getUserData = async (req, res) => {
  const uname = req.params.username;

  const user = await User.findOne({ username: uname });
  if (!user) {
    return res.status(404).json({ error: `User does not exist: ${uname}` });
  }

  const userRecipes = await Recipe.find({ username: user.username }).select('-__v').sort({ createdAt: -1 });

  const userData = {
    name: user.name,
    username: user.username,
    recipes: userRecipes,
  }

  const key = 'user:' + user.username;
  const value = JSON.stringify(userData);
  redisHelper.set(key, value, 60);
  return res.status(200).json(userData);
};