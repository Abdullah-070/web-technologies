const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Landing page route
router.get('/', async (req, res) => {
  try {
    const featuredProducts = await Product.find().populate('category').limit(4);
    res.render('index', { 
      title: 'Welcome to Auto Care',
      description: 'The best place to find awesome products.',
      featuredProducts
    });
  } catch (err) {
    console.error(err);
    res.render('index', { 
      title: 'Welcome to Auto Care',
      description: 'The best place to find awesome products.',
      featuredProducts: []
    });
  }
});

module.exports = router;
