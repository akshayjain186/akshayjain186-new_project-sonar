// src/seeder/seed.js
const { sequelizeService } = require('../../config/database');  // Ensure this is the correct path
const seedRoles = require('./seedRoles');
const seedCategoriesAndSubcategories = require('./seedCategoriesAndSubcategories');
const seedProjectManageRole = require('./seedProjectManageRole');

console.log(sequelizeService);  // Check if sequelizeService is correctly imported

if (!sequelizeService) {
  console.error('Sequelize instance is undefined!');
  return;
}

(async () => {
  try {
    await sequelizeService.authenticate();
    console.log('Database connection successful!');

    await sequelizeService.sync({ force: true });
    console.log('Database synchronized!');

    // Seed roles
    await seedRoles();

    // Seed categories and subcategories
    await seedCategoriesAndSubcategories();

    // Seed project manage role
    await seedProjectManageRole();

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await sequelizeService.close();
  }
})();
