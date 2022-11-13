const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { addRecipe  } = require('../controllers/recipe');

router.post('/create', verifyToken, addRecipe);

module.exports = router;