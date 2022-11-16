const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { checkCacheForUser } = require('../middleware/redis');
const {
    getUserData,
    followUser,
    addFollower,
    unfollowUser,
    removeFollower,
} = require('../controllers/user');

router.get('/:username', checkCacheForUser, getUserData);
router.put('/follow', verifyToken, followUser, addFollower);
router.put('/unfollow', verifyToken, unfollowUser, removeFollower);

module.exports = router;