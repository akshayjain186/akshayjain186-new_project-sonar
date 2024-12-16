const Category = require("../models/categoryModel");
const Subcategory = require("../models/subcategoryModel");

// Create Category
const createCategory = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
        status: "error",
      });
    }

    const existingCategory = await Category.findOne({ where: { title } });
    if (existingCategory) {
      return res.status(400).json({
        message: "Category with this title already exists",
        status: "error",
      });
    }

    const newCategory = await Category.create({ title });

    return res.status(201).json({
      message: "Category created successfully",
      status: "success",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating category",
      status: "error",
      error: error.message,
    });
  }
};

// Get Categories Details
// const getCategoriesDetails = async (req, res) => {
//   try {
//     // Fetch all categories
//     const allCategories = await Category.findAll();

//     if (!allCategories.length) {
//       return res.status(404).json({
//         statusCode: 404,
//         status: false,
//         data: [],
//         message: "Categories not found",
//       });
//     }
//     const categoriesWithSubcategories = [];
//     for (const category of allCategories) {
//       const subcategories = await Subcategory.findAll({
//         where: { categoryId: category.id },
//       });

//       categoriesWithSubcategories.push({
//         category: category,
//         subcategories: subcategories,
//       });
//     }

//     return res.status(200).json({
//       statusCode: 200,
//       status: true,
//       data: categoriesWithSubcategories,
//       message: "Categories and their subcategories fetched successfully",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       statusCode: 500,
//       status: false,
//       error: error.message,
//     });
//   }
// };

const getCategoriesDetails = async (req, res) => {
  try {
    // Fetch all categories
    const allCategories = await Category.findAll();

    if (!allCategories.length) {
      return res.status(404).json({
        message: "Categories not found",
        statusCode: 404,
        status: false,
        data: [],
      });
    }

    return res.status(200).json({
      message: "Categories fetched successfully",
      statusCode: 200,
      status: true,
      data: allCategories,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      status: false,
      error: error.message,
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params; // Extract category ID from request parameters

    // Fetch category by ID
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        data: null,
        message: "Category not found",
      });
    }

    // Fetch subcategories manually based on `categoryId`
    const subcategories = await Subcategory.findAll({
      where: { categoryId: id },
    });

    return res.status(200).json({
      statusCode: 200,
      status: true,
      data: {
        category,
        subcategories,
      },
      message: "Category and its subcategories fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      status: false,
      error: error.message,
    });
  }
};

// Update Category
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const updatedCategory = await Category.update(
      { title },
      { where: { id }, returning: true }
    );

    if (updatedCategory[0] === 0) {
      return res.status(404).json({
        message: "Category not found",
        status: "error",
      });
    }

    res.status(200).json({
      message: "Category updated successfully",
      status: "success",
      data: updatedCategory[1][0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating category",
      status: "error",
      error: error.message,
    });
  }
};

// Delete Category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if category exists before trying to delete
    const category = await Category.findOne({ where: { id } });
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
        status: "error",
      });
    }

    // This Find and delete category by ID
    const deleteCategory = await Category.destroy({ where: { id } });

    if (deleteCategory === 0) {
      return res.status(404).json({
        message: "Category not found",
        status: "error",
      });
    }

    res.status(200).json({
      message: "Category deleted successfully",
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error while deleting category",
      status: "error",
      error: error.message,
    });
  }
};

module.exports = {
  createCategory,
  getCategoriesDetails,
  updateCategory,
  deleteCategory,
  getCategoryById
};
