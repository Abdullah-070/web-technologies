module.exports = async (req, res, next) => {
  res.locals.categories = [];

  // 4. Load Cart items count
  const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
  res.locals.cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  next();
};
