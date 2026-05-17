const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, default: 'High-quality automotive product.' },
  image: { type: String, default: '/Assets/Engine Oil.png' }
});

module.exports = mongoose.model('Product', productSchema);
