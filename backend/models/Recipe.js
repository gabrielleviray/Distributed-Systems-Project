const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    username: {type: String, required: true },
    title: { type: String, required: true },
    time: { type: String, required: true },
    ingredients: { type: String, required: true },
    directions: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Recipe', RecipeSchema);