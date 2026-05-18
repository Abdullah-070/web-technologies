const Category = require('../models/Category');

module.exports = async (req, res, next) => {
  // Stub flash function to prevent router crashes since flash is removed
  req.flash = function() {};

  // 3. Load Categories for dropdown
  try {
    const categories = await Category.find().sort('name');
    res.locals.categories = categories;
  } catch (err) {
    res.locals.categories = [];
  }

  // 4. Load Cart items count
  const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
  res.locals.cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  next();
};
