const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  if (!(req.body.name && req.body.username && req.body.email && req.body.password)) {
    return res.status(400).json({ error: 'Missing required information' });
  }

  var user = await User.findOne({ username: req.body.username });
  if (user) {
    return res.status(401).json({ error: 'Username is already in use' });
  }

  var user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(401).json({ error: 'Email is already in use' });
  }

  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  });

  newUser.save(err => {
    if (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong. Please try again later.' })
    } else {
      return res.status(201).json({ message: 'User sucessfully created' })
    }
  })
});

module.exports = router;