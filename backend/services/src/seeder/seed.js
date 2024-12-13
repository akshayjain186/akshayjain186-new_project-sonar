const { sequelize } = require('../../config/database');
const seedRoles = require('./seedRoles');
const seedCategoriesAndSubcategories = require('./seedCategoriesAndSubcategories'); 
const seedProjectManageRole = require('./seedProjectManageRole');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful!');

    await sequelize.sync({ force: true });
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
    await sequelize.close();
  }
})();
