// Import the express module
const express = require("express");

// Initialize an express application
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Define a route for the root URL ('/')
app.get("/", function (req, res) {
    // Render the 'homepage' view
    return res.render("homepage");
});

// Define a route for the '/contact-us' page
app.get("/contact-us", function (req, res) {
    // Render the 'contact-us' view
    return res.render("contact-us");
});

// Start the server on port 3000
app.listen(3000, function () {
    console.log("Server Started at localhost:3000");
});
