const { sequelize } = require('../../config/database'); 
const Category = require('../models/categoryModel');
const Subcategory = require('../models/subcategoryModel');

const categories = [
  {
    title: 'Carpenter and Building Tradesmen',
    subcategories: [
      { name: 'Bathroom' },
      { name: 'Washing room' },
      { name: 'Living room' },
      { name: 'Kitchen' },
      { name: 'Toilet' },
      { name: 'Bedroom' },
      { name: 'Children room' },
      { name: 'Technical room' },
      { name: 'Storage room' },
      { name: 'Hallway' },
      { name: 'Other' },
    ],
  },
  {
    title: 'Cleaner',
    subcategories: [
      { name: 'Bathroom' },
      { name: 'Living room' },
      { name: 'Kitchen' },
      { name: 'Other' },
    ],
  },
  {
    title: 'Demolition, Tiling, and Concrete Sawing',
    subcategories: [
      { name: 'Bathroom' },
      { name: 'Technical room' },
      { name: 'Storage room' },
      { name: 'Other' },
    ],
  },
  {
    title: 'Electrician',
    subcategories: [
      { name: 'Technical room' },
      { name: 'Living room' },
      { name: 'Hallway' },
      { name: 'Other' },
    ],
  },
  {
    title: 'Foundation and Landscaping Worker',
    subcategories: [
      { name: 'Ground work' },
      { name: 'New home' },
      { name: 'Superstructure and extension' },
      { name: 'Build a garage' },
    ],
  },
  {
    title: 'Glass Master and Glazier',
    subcategories: [
      { name: 'Bathroom' },
      { name: 'Living room' },
      { name: 'Kitchen' },
      { name: 'Other' },
    ],
  },
  {
    title: 'Plumber',
    subcategories: [
      { name: 'Bathroom' },
      { name: 'Kitchen' },
      { name: 'Toilet' },
      { name: 'Other' },
    ],
  },
  {
    title: 'Roofer and Tinsmith',
    subcategories: [
      { name: 'Roofing' },
      { name: 'Facade' },
      { name: 'Other' },
    ],
  },
  {
    title: 'Tiler, Bricklayer, and Plastering',
    subcategories: [
      { name: 'Living room' },
      { name: 'Storage room' },
      { name: 'Hallway' },
      { name: 'Other' },
    ],
  },
];

const seedCategoriesAndSubcategories = async () => {
    try {
      console.log('Connecting to the database...');
      await sequelize.authenticate(); 
      console.log('Database connected successfully.');
  
      for (const categoryData of categories) {
        const [categoryInstance] = await Category.findOrCreate({
          where: { title: categoryData.title },
        });
  
        for (const subcategoryData of categoryData.subcategories) {
          await Subcategory.create({
            name: subcategoryData.name,
            CategoryId: categoryInstance.id,
          });
        }
      }
  
      console.log('Categories and subcategories seeded successfully!');
    } catch (error) {
      console.error('Error seeding categories and subcategories:', error);
    }
  };

module.exports = seedCategoriesAndSubcategories;
