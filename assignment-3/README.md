# Assignment 3: Dynamic Product Catalog

## Objective
Transition from static pages to a database-driven product catalog featuring server-side pagination, filtering, and sorting.

## Features
- Express & EJS application
- MongoDB integration (Mongoose) with `Product` schema
- Database seeding with sample products
- Server-side pagination (8 products per page)
- Filtering by Category and Name Search
- Note: Admin panel and Authentication are not included in this phase.

## Setup Instructions
1. Ensure Node.js and MongoDB are installed, and MongoDB is running locally on port 27017.
2. Open terminal in this directory.
3. Run `npm install` to install dependencies.
4. Run `node seed.js` to populate the database with sample products.
5. Run `node server.js` to start the server.
6. Visit `http://localhost:3000/shop` to view the dynamic catalog.
