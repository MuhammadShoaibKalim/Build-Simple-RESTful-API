// index.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api-routes');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





// MongoDB connection
/// MongoDB connection
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/shoaib';
mongoose.connect(dbUrl)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server once the database connection is established
    app.listen(port, () => {
      console.log(`Running RestHub on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process or handle the error in another way
  });



// Default route
app.get('/', (req, res) => res.send('hello shoaib'));

// API routes
app.use('/api', apiRoutes);
