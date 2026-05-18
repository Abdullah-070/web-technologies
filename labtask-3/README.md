# Lab Assignment 3: User Authentication & Role-Based Access Control

## Objective
Secure the platform by implementing a robust authentication system, distinguishing between standard Customers and Admins.

## Features
- All Assignment 4 features (Admin CRUD, Product Catalog)
- User Registration & Login with `bcryptjs` password hashing
- Session management using `express-session` and `connect-mongo`
- Flash messages via `connect-flash`
- Authorization middleware (`isLoggedIn`, `isAdmin`)
- Protected checkout and admin routes
- Dynamic UI elements (Login/Register vs Logout/Profile)

## Setup Instructions
1. Ensure Node.js and MongoDB are running locally.
2. Run `npm install` to install dependencies.
3. Run `node seed.js` to populate products and default users.
4. Run `node server.js` to start the server.
5. Visit `http://localhost:3000`.
   - **Admin test account:** `admin@example.com` / `password123`
   - **Customer test account:** `user@example.com` / `password123`
