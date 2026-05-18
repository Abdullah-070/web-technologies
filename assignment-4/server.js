const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const config = require('config');
const path = require('path');
const cookieParser = require('cookie-parser');

// Middlewares
const logger = require('./middlewares/logger');
const globalMiddleware = require('./middlewares/global');

// Routes
const indexRoutes = require('./routes/index');
const shopRoutes = require('./routes/shop/index');
const cartRoutes = require('./routes/shop/cart');
const adminIndexRoutes = require('./routes/admin/index');
const adminProductRoutes = require('./routes/admin/products');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());

// Configuration
const PORT = config.has('port') ? config.get('port') : 3000;
const MONGO_URI = config.get('mongoURI');

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Set up EJS and Layouts
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout'); // default layout is views/layout.ejs

// Built-in Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


// Custom Middlewares
app.use(logger);
app.use(globalMiddleware);

// Set Admin Layout for admin routes
app.use('/admin', (req, res, next) => {
  res.locals.layout = 'admin-layout';
  next();
});

// Mount Routes
app.use('/', indexRoutes);
app.use('/cart', cartRoutes);
app.use('/', shopRoutes);

// Admin Routes
app.use('/admin', adminIndexRoutes);
app.use('/admin/products', adminProductRoutes);


// 404 Handler
app.use((req, res) => {
  res.status(404).render('index', { 
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
