const  Subcategory  = require('../models/subcategoryModel');
const  Category  = require('../models/categoryModel');


// Create Subcategory
const createSubcategory = async (req, res, next) => {
    try {
        const { name, subcategory_type, CategoryId } = req.body;

        // Validate required fields
        if (!name || !subcategory_type || !CategoryId) {
            return res.status(400).json({
                message: 'Name, subcategory type, and parent category are required.',
                status: 'error',
            });
        }

        const parentCategory = await Category.findByPk(CategoryId);
        if (!parentCategory) {
            return res.status(404).json({
                message: 'Parent category not found.',
                status: 'error',
            });
        }

        // Check if the subcategory already exists under the specified category
        const existingSubcategory = await Subcategory.findOne({
            where: { name, subcategory_type, CategoryId },
        });
        if (existingSubcategory) {
            return res.status(400).json({
                message: 'Subcategory with this name already exists under the specified parent category.',
                status: 'error',
            });
        }

        // Create the new subcategory
        const newSubcategory = await Subcategory.create({
            name,
            subcategory_type,
            CategoryId,
        });

        res.status(201).json({
            message: 'Subcategory created successfully.',
            status: 'success',
            data: newSubcategory,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating subcategory.',
            error: error.message,
        });
    }
};

// Get Subcategory by ID
const getSubcategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const subcategory = await Subcategory.findByPk(id);

        if (!subcategory) {
            return res.status(404).json({
                message: 'Subcategory not found.',
                status: 'error',
            });
        }

        res.status(200).json({
            message: 'Subcategory fetched successfully.',
            status: 'success',
            data: subcategory,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching subcategory.',
            error: error.message,
        });
    }
};

// Get All Subcategories
const getAllSubcategory = async (req, res, next) => {
    try {
        const subcategories = await Subcategory.findAll();

        if (subcategories.length === 0) {
            return res.status(404).json({
                message: 'No subcategories found.',
                status: 'error',
            });
        }

        res.status(200).json({
            message: 'Subcategories fetched successfully.',
            status: 'success',
            data: subcategories,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching subcategories.',
            error: error.message,
        });
    }
};

// Update Subcategory
const updateSubcategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, subcategory_type } = req.body;

        // Ensure the subcategory exists
        const subcategory = await Subcategory.findByPk(id);
        if (!subcategory) {
            return res.status(404).json({
                message: 'Subcategory not found.',
                status: 'error',
            });
        }

        // Validate the provided fields
        if (!name && !subcategory_type) {
            return res.status(400).json({
                message: 'At least one field (name or subcategory_type) must be provided for update.',
                status: 'error',
            });
        }

        // If updating name, check if the new name already exists under the same parent category
        if (name) {
            const existingSubcategory = await Subcategory.findOne({
                where: { name, subcategory_type, CategoryId: subcategory.CategoryId },
            });
            if (existingSubcategory && existingSubcategory.id !== id) {
                return res.status(400).json({
                    message: 'A subcategory with this name already exists under the specified parent category.',
                    status: 'error',
                });
            }
            subcategory.name = name;
        }

        if (subcategory_type) {
            subcategory.subcategory_type = subcategory_type;
        }

        await subcategory.save();

        res.status(200).json({
            message: 'Subcategory updated successfully.',
            status: 'success',
            data: subcategory,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating subcategory.',
            error: error.message,
        });
    }
};

// Delete Subcategory
const deleteSubcategory = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Check if the subcategory exists before deletion
        const subcategory = await Subcategory.findByPk(id);
        if (!subcategory) {
            return res.status(404).json({
                message: 'Subcategory not found.',
                status: 'error',
            });
        }

        // Delete the subcategory
        await Subcategory.destroy({ where: { id } });

        res.status(200).json({
            message: 'Subcategory deleted successfully.',
            status: 'success',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting subcategory.',
            error: error.message,
        });
    }
};

module.exports = {
    createSubcategory,
    getSubcategory,
    getAllSubcategory,
    updateSubcategory,
    deleteSubcategory,
};
