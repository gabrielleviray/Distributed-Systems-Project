const Recipe = require('../models/Recipe');

exports.addRecipe = async (req, res) => {
  if (!req.body.title || !req.body.time || !req.body.ingredients || !req.body.directions) {
    return res.status(400).json({ error: 'Missing required information' });
  }
  
  const newRecipe = new Recipe({
    author: req.user.name,
    username: req.user.username,
    title: req.body.title,
    time: req.body.time,
    ingredients: req.body.ingredients,
    directions: req.body.directions,
  });

  newRecipe.save(err => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    } else {
      return res.status(201).json({ message: 'Recipe sucessfully added' });
    }
  })
};