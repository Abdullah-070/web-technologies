const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGO_URI = "mongodb://localhost:27017/assignment3_ecommerce";

const seedProducts = [
  ...Array.from({ length: 30 }).map((_, i) => ({
    name: `Auto Part ${i + 1}`,
    price: Math.floor(Math.random() * 150) + 10,
    category: ['Filters', 'Lights', 'Oils and Additives'][Math.floor(Math.random() * 3)],
    description: 'High-quality product for your vehicle.',
    image: ['/Assets/Air filter.png', '/Assets/Engine Oil.png', '/Assets/Head light.png', '/Assets/Rear light.png'][Math.floor(Math.random() * 4)]
  }))
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding data...');
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    console.log('Database seeded with 30 products!');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
