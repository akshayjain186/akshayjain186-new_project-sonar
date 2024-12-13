require('dotenv').config({ path: '../../shared/config/.env' });
const express = require('express');
// const productRoutes = require('./routes/productRoutes');
const { sequelizeService } = require('../../services/config/database');  // Ensure correct path
const { authenticate } = require('../middleware/authMiddleware');
const categoryRoutes = require('./routes/CategoriesRoutes')
const subcategoryRoutes = require('./routes/SubcategoriesRoutes')
const projectmanageroleRoutes = require('./routes/ProjectmanageroleRoutes')
const projectSubcategoryRoutes = require('./routes/ProjectRoutes')
const registerCompanyRoutes = require('./routes/CompanyRoutes')

const app = express();

// Middleware
app.use(express.json());

// Routes
// app.use('/api/products', authenticate, productRoutes);  // Protect product routes with authentication
app.use('/api/category', categoryRoutes);
app.use('/api/subcategory', subcategoryRoutes);
app.use('/api/projectmanager', projectmanageroleRoutes);
app.use('/api/project', projectSubcategoryRoutes);

app.use('/api/company',registerCompanyRoutes)

// Test DB connection and handle errors
sequelizeService.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(`Error: ${err}`)); // Direct chaining for error handling

// Start server with direct chaining
app.listen(process.env.PORT || 3002, () =>
  console.log(`Server running on port ${process.env.PORT || 3002}`) // Direct chaining for server start
);
