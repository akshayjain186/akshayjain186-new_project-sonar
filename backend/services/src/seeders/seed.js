const { sequelize } = require('../../config/database')
const seedProjectManageRole = require('./seedProjectManageRole');
const seedCategoriesAndSubcategories = require('./seedCategoriesAndSubcategories');


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful!');

    await sequelize.sync({ force: true }); 
    console.log('Database synchronized!');
  
      await seedProjectManageRole();
      await seedCategoriesAndSubcategories();
   

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await sequelize.close();
  }
})();
