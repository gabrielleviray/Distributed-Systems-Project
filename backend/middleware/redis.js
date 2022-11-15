const redis = require('redis');

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