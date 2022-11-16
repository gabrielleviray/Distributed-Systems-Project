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

exports.set = async (key, value, expire) => {
  try {
    await client.set(key, value, {
      EX: expire,
    });
  } catch (err) {
    console.log(err);
  }
};