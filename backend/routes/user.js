const express = require('express');
const router = express.Router();
const { getUserData } = require('../controllers/user');

router.get('/:username', getUserData);

module.exports = router;