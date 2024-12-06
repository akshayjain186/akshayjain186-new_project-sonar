require('dotenv').config({ path: '../../shared/config/.env' });
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const { sequelize } = require('../config/database');
const { authenticate } = require('../middleware/authMiddleware');

const app = express();

// Import the continent routes
const continentRoutes = require('./routes/continentRoutes');
const countryRoutes = require('./routes/countriesRoutes'); // Import the routes
const currencyRoutes = require('./routes/currencyRoutes'); // Adjust path if necessary
const languageRoutes = require('./routes/languagesRoutes')
const company = require('./routes/companyRoutes')

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', authenticate, productRoutes);  // Protect product routes with authentication

app.use('/api/continents', continentRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api', currencyRoutes); 
app.use('/api/languages',languageRoutes)
app.use('/api/company',company)


// Test DB connection and handle errors in a single chain
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(`Error: ${err}`)); // Direct chaining for error handling

// Start server with direct chaining
app.listen(process.env.PORT || 3002, () =>
  console.log(`Server running on port ${process.env.PORT || 3002}`) // Direct chaining for server start
);
