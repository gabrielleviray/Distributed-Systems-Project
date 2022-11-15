const express = require('express');
const router = express.Router();
const { checkCacheForUser } = require('../middleware/redis');
const { getUserData } = require('../controllers/user');

router.get('/:username', checkCacheForUser, getUserData);

module.exports = router;