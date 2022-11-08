const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  if (!req.body.name || !req.body.username || !req.body.email || !req.body.password) {
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
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    } else {
      return res.status(201).json({ message: 'User sucessfully created' });
    }
  })
};

exports.login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ error: 'Missing required information' });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ error: 'Incorrect email or password' });
  }

  bcrypt.compare(req.body.password, user.password, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }

    if (data) {
      const payload = {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      }

      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '3d' },
      )
      return res.status(200).json({ token: token, name: user.name, username: user.username, email: user.email, isAdmin: user.isAdmin });
    } else {
      return res.status(401).json({ error: 'Incorrect email or password' });
    }
  })
};