const User = require('../models/User');
const Recipe = require('../models/Recipe');

exports.getUserData = async (req, res) => {
  const uname = req.params.username;

  const user = await User.findOne({ username: uname });
  if (!user) {
    return res.status(400).json({ error: `User does not exist: ${uname}` });
  }

  const userRecipes = await Recipe.find({ username: user.username }).sort({ createdAt: -1 });

  const userData = {
    name: user.name,
    username: user.username,
    recipes: userRecipes,
  }

  return res.status(200).json(userData);
};