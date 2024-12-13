require('dotenv').config({ path: '../../shared/config/.env' });

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('../config/database');
const continentRoutes = require('./routes/continentRoutes');
const countryRoutes = require('./routes/countriesRoutes');
const currencyRoutes = require('./routes/currencyRoutes');
const languageRoutes = require('./routes/languagesRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');  

const app = express();
const { authenticate } = require('../middleware/authMiddleware');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/continents',authenticate, continentRoutes);
app.use('/api/countries',authenticate, countryRoutes);
app.use('/api/currencies',authenticate, currencyRoutes);
app.use('/api/languages',authenticate, languageRoutes);

// DB Connection Test
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log(`Error: ${err}`));

// Start server
app.listen(process.env.PORT || 3001, () =>
  console.log(`Server running on port ${process.env.PORT || 3001}`)
);
