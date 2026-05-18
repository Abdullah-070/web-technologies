# Lab Assignment 4: Secure RESTful API with JWT

## Objective
Shift the application toward a headless architecture by exposing a RESTful API, implementing JSON Web Tokens (JWT) for secure authentication of external clients.

## Features
- All previous backend features (Auth, Admin CRUD, Shop)
- RESTful API endpoints under `/api/v1` serving JSON
- Public endpoints for products (`GET /api/v1/products`)
- Protected endpoints (`POST /api/v1/orders`, `GET /api/v1/user/profile`)
- Stateless authentication using JWT (`POST /api/v1/auth/login`)
- `verifyToken` middleware checking `Authorization: Bearer <token>`
- `react-app` frontend client included to demonstrate API consumption

## Setup Instructions
1. Ensure Node.js and MongoDB are running.
2. Ensure `.env` is present with `JWT_SECRET` configured.
3. In this directory, run `npm install`.
4. Run `node seed.js` to populate data and users.
5. Run `node server.js` to start the backend API and web server on port 3000.
6. **To test the React client:**
   - Navigate to `cd react-app`
   - Run `npm install`
   - Run `npm run dev`
   - The React app will run (usually on port 5173) and securely communicate with the backend API.
