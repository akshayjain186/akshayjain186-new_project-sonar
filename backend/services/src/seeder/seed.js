// src/seeder/seed.js
const { sequelizeService } = require('../../config/database');  // Ensure this is the correct path
const seedRoles = require('./seedRoles');
const seedCategoriesAndSubcategories = require('./seedCategoriesAndSubcategories');
const seedProjectManageRole = require('./seedProjectManageRole');

 // Check if sequelizeService is correctly imported

if (!sequelizeService) {
  console.error('Sequelize instance is undefined!');
  return;
}

(async () => {
  try {
    await sequelizeService.authenticate();
    await sequelizeService.sync({ force: true });

    // Seed roles
    // await seedRoles();
    // Seed categories and subcategories
    await seedCategoriesAndSubcategories();

    // Seed project manage role
    await seedProjectManageRole();
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await sequelizeService.close();
  }
})();
