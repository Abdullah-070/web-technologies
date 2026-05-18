# Assignment 4: E-Commerce Administration System

## Objective
Extend the application by building a secure Admin Panel for managing product inventory via CRUD operations.

## Features
- Express & EJS application with MongoDB
- Dynamic product catalog (pagination, filtering)
- Separate Admin layout (`admin-layout.ejs`) and dashboard
- Full Product CRUD (Create, Read, Update, Delete)
- Image upload handling using Multer (`/public/uploads/products`)
- Confirmation pop-ups before deletion
- Note: User Authentication/Sessions are not yet implemented in this phase.

## Setup Instructions
1. Ensure Node.js and MongoDB are installed and running locally.
2. Run `npm install` to install dependencies.
3. Run `node seed.js` to populate the database with sample products.
4. Run `node server.js` to start the server.
5. Visit `http://localhost:3000/admin` to access the Admin Panel.
