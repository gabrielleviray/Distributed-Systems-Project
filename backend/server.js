const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoute = require('./routes/auth');

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

app.use('/api/auth', authRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});