require('dotenv').config({ path: '../../shared/config/.env' });
const { Sequelize } = require('sequelize');

// Database connection for the Service Service
let sequelizeService = null;

sequelizeService = new Sequelize(
  process.env.DB_NAME_SERVICE,
  process.env.DB_USER_SERVICE,
  process.env.DB_PASSWORD_SERVICE,
  {
    host: process.env.DB_HOST_SERVICE,
    dialect: 'mysql',
    port: process.env.DB_PORT_SERVICE || 3306, // Default MySQL port
  }
);

// Test the connection for the Service Service Database
(async () => {
  try {
    await sequelizeService.authenticate();
    console.log('Service Service Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the Service Service Database:', error);
    throw new Error('Service Service Database connection failed');
  }
})();

module.exports = { sequelizeService };
