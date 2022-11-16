const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const redisMiddleware = require('./middleware/redis');
const redisHelper = require('./helpers/redis');

const authRoute = require('./routes/auth');
const recipeRoute = require('./routes/recipe');
const userRoute = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());

// connect to db
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.ATLAS_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();

redisMiddleware.init();
redisHelper.init();

app.use('/api/auth', authRoute);
app.use('/api/recipe', recipeRoute);
app.use('/api/user', userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});