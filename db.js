// db.js
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/shoaib';

mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

module.exports = mongoose.connection;
