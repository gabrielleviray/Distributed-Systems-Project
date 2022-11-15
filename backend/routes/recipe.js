const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { checkCacheForAllRecipes } = require('../middleware/redis');
const {
    addRecipe,
    getAllRecipes,
} = require('../controllers/recipe');

router.post('/create', verifyToken, addRecipe);
router.get('/all', checkCacheForAllRecipes, getAllRecipes);

module.exports = router;