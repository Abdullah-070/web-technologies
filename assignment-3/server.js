let express = require("express");
let mongoose = require("mongoose");
let app = express();
let Product = require('./models/Product');

mongoose.connect("mongodb://localhost:27017/assignment3_ecommerce")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  return res.render("index", { title: "Auto Care - Premium Automotive Products" });
});

// Dynamic Products Route with Pagination and Filtering
app.get("/products", async function (req, res) {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = 8;
    let skip = (page - 1) * limit;

    let query = {};
    if (req.query.search) {
      query.name = { $regex: req.query.search, $options: "i" };
    }
    if (req.query.category && req.query.category !== 'All') {
      query.category = req.query.category;
    }
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) query.price.$gte = Number(req.query.minPrice);
      if (req.query.maxPrice) query.price.$lte = Number(req.query.maxPrice);
    }

    let totalProducts = await Product.countDocuments(query);
    let totalPages = Math.ceil(totalProducts / limit);

    let products = await Product.find(query).skip(skip).limit(limit);

    res.render("products", {
      title: "Dynamic Product Catalog",
      products,
      currentPage: page,
      totalPages,
      query: req.query
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(3000, function () {
  console.log("Server Started at http://localhost:3000");
});
