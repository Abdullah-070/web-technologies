const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

// GET /onsale-products — fetch all on-sale products and pass to EJS
router.get('/onsale-products', async (req, res) => {
  try {
    const products = await Product.find({ isOnSale: true }).populate('category');
    res.render('shop/onsale', {
      title: 'On-Sale Products',
      products
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
