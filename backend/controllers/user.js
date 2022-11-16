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
    id: user._id,
    name: user.name,
    username: user.username,
    recipes: userRecipes,
  }

  const key = 'user:' + user.username;
  const value = JSON.stringify(userData);
  redisHelper.set(key, value, 60);
  return res.status(200).json(userData);
};

exports.followUser = async (req, res, next) => {
  const uid = req.user._id;
  const followId = req.body.followId;
  User.findByIdAndUpdate(uid, { $push: { following: followId } }, (err, result) => {
    if (err) {
      return res.status(400).json({ error: `Failed to update this user's following list` });
    }
    next();
  });
};

exports.addFollower = async (req, res) => {
  const uid = req.user._id;
  const followId = req.body.followId;
  User.findByIdAndUpdate(followId, { $push: { followers: uid } }, (err, result) => {
    if (err) {
      return res.status(400).json({ error: `Failed to update the other user's follower list` });
    }
  });
  return res.status(200).json({ message: 'Successfully followed user' });
};

exports.unfollowUser = async (req, res, next) => {
  const uid = req.user._id;
  const unfollowId = req.body.unfollowId;
  User.findByIdAndUpdate(uid, { $pull: { following: unfollowId } }, (err, result) => {
    if (err) {
      return res.status(400).json({ error: `Failed to update this user's following list` });
    }
    next();
  })
};

exports.removeFollower = async (req, res) => {
  const uid = req.user._id;
  const unfollowId = req.body.unfollowId;
  User.findByIdAndUpdate(unfollowId, { $pull: { followers: uid } }, (err, result) => {
    if (err) {
      return res.status(400).json({ error: `Failed to update the other user's follower list` });
    }
  })
  return res.status(200).json({ message: 'Successfully unfollowed user' });
};

exports.getFolllowingRecipes = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('following', 'username').lean().exec();
    const recipes = await Recipe.find({}).select('-__v').sort({ createdAt: -1 });
    const following = user.following;

    let data = [];
    for (const recipe of recipes) {
      if (following.some(u => u.username === recipe.username)) {
        data.push(recipe);
      }
    }
    return res.status(200).json({ recipes: data });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};