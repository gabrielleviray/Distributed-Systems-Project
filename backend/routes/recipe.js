const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const {
    addRecipe,
    getAllRecipes,
} = require('../controllers/recipe');

router.post('/create', verifyToken, addRecipe);
router.get('/all', getAllRecipes);

module.exports = router;