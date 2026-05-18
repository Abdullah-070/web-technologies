module.exports = {
  // Used on checkout route to protect against unauthenticated access
  isLoggedIn: function(req, res, next) {
    if (req.session.user) {
      return next();
    }
    req.flash('error', 'Please log in to view that resource');
    res.redirect('/auth/login');
  },
  // Alias for backward compatibility
  ensureAuthenticated: function(req, res, next) {
    if (req.session.user) {
      return next();
    }
    req.flash('error', 'Please log in to view that resource');
    res.redirect('/auth/login');
  },
  // Applied to all /admin routes — checks role === 'admin'
  isAdmin: function(req, res, next) {
    if (req.session.user && req.session.user.role === 'admin') {
      return next();
    }
    req.flash('error', 'Access denied. Admin only.');
    res.redirect('/');
  },
  // Alias for backward compatibility
  ensureAdmin: function(req, res, next) {
    if (req.session.user && req.session.user.role === 'admin') {
      return next();
    }
    req.flash('error', 'Access denied. Admin only.');
    res.redirect('/');
  }
};
