const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const authController = require('./controllers/authController')
const productController = require('./controllers/productController');
const uploadController = require('./controllers/uploadController');

// Connect to MongoDB
mongoose.set('strictQuery', false); // Corrected typo here
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB is successfully connected');
    // Start the server after successful database connection
  })
  .catch(error => {
    console.error('Error connecting to database:', error);
  });

  //routes and middleware
  app.use(cors());
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use('/images',express.static('public/images'))
  app.use('/auth',authController);
  app.use('/product',productController)
  app.use('/upload',uploadController)

  app.listen(process.env.PORT, () => {
    console.log('Server has been started successfully');
});