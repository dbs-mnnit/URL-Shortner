// File: index.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const swaggerSetup = require('./app/config/swagger'); // Import Swagger configuration
const authRoutes = require('./app/routes/auth_routes');
const profileRoutes = require('./app/routes/profile_routes');
const adminRoutes = require('./app/routes/admin_routes');
const connectDB = require('./app/config/db');

const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/admin',adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// Swagger Documentation
swaggerSetup(app);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
