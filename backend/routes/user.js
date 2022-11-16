const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { checkCacheForUser } = require('../middleware/redis');
const {
    getUserData,
    followUser,
    addFollower,
} = require('../controllers/user');



router.get('/:username', checkCacheForUser, getUserData);
router.put('/follow', verifyToken, followUser, addFollower);

module.exports = router;