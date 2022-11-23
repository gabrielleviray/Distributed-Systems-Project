const redis = require('redis');
const { isAuth } = require('../helpers/auth');

let client;

exports.init = async () => {
  // const redisPort = process.env.REDIS_PORT || 6379;
  // const client = redis.createClient(redisPort);
  client = redis.createClient({
    url: process.env.REDIS_URI,
  });
  client.on('connect', () => {
    console.log('Connected to Redis');
  });
  client.on('error', (err) => {
    console.log(`Connection to Redis failed: ${err}`);
  });
  await client.connect();
}

exports.checkCacheForAllRecipes = async (req, res, next) => {
  try {
    const data = await client.get('recipe:all');
    if (data) {
      return res.status(200).json(JSON.parse(data));
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

exports.checkCacheForUser = async (req, res, next) => {
  try {
    const key = 'user:' + req.params.username;
    const data = await client.get(key);
    if (data) {
      const userData = JSON.parse(data);
      if (await isAuth(req)) {
        userData.isMe = (req.user._id == userData.id);
        userData.isFollowing = req.user.following.includes(userData.id);
      }
      return res.status(200).json(userData);
    }
  } catch (err) {
    console.log(err);
  }
  next();
};