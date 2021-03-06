if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
