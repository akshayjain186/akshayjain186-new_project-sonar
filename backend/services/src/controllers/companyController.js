const CompanyModel = require('../models/companyModel');
const Category = require('../models/categoryModel');
const Country = require('../models/countriesModel');
const Language = require('../models/languagesModel');
const Currency = require('../models/currencyModel');
const Continent = require('../models/continentsModel');
const ProjectManagerRole = require('../models/projectmanagerole');

/**
 * Helper function to validate IDs without foreign keys
 * @param {Array} relations - Array of objects with model and id
 * @returns {Object} - Validated IDs as key-value pairs
 */
const validateRelationsWithoutForeignKey = async (relationsArray) => {
    const validatedRelations = {};

    for (const { model, id, key } of relationsArray) {
        if (!id) continue;

        const record = await model.findByPk(id);
        if (!record) {
            throw new Error(`${key} with ID ${id} not found.`);
        }
        validatedRelations[`${key}Id`] = id; // Manually map validated IDs
    }

    return validatedRelations;
};

/**
 * Controller to register a new company without foreign key constraints
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const registerCompany = async (req, res) => {
    try {
        const {
            companyName,
            organisationNumber,
            city,
            address,
            postalcode,
            categoryId,
            jobTypes = [],
            employeeCount,
            useSubcontractors,
            countyCoverage,
            ProjectManagerRoleId,
            continentId,
            countryId,
            languageId,
            currencyId,
        } = req.body;

        // Required field validations
        if (!companyName || !organisationNumber || !city || !address || !postalcode) {
            return res.status(400).json({ message: 'All required fields must be provided.' });
        }

        if (jobTypes.length === 0) {
            return res.status(400).json({ message: 'Job types must be provided.' });
        }

        // Define relations for validation
        const relationsArray = [
            { model: Category, id: categoryId, key: 'category' },
            { model: Country, id: countryId, key: 'country' },
            { model: Language, id: languageId, key: 'language' },
            { model: Currency, id: currencyId, key: 'currency' },
            { model: Continent, id: continentId, key: 'continent' },
            { model: ProjectManagerRole, id: ProjectManagerRoleId, key: 'ProjectManagerRole' },
        ];

        // Validate relations without foreign keys
        const relations = await validateRelationsWithoutForeignKey(relationsArray);

        // Create a new company
        const newCompany = await CompanyModel.create({
            companyName,
            organisationNumber,
            city,
            address,
            postalcode,
            jobTypes,
            employeeCount,
            useSubcontractors,
            countyCoverage,
            ...relations, // Spread validated relations
        });

        // Fetch full details for response
        const category = await Category.findByPk(categoryId); // Make sure the model refers to the 'categories' table
        const country = await Country.findByPk(countryId);
        const language = await Language.findByPk(languageId);
        const currency = await Currency.findByPk(currencyId);
        const continent = await Continent.findByPk(continentId);
        const projectManagerRole = await ProjectManagerRole.findByPk(ProjectManagerRoleId);

        // Check if category was found
        if (!category) {
            console.error(`Category with ID ${categoryId} not found.`);
        }

        res.status(201).json({
            message: 'Company registered successfully.',
            data: {
                id: newCompany.id,
                companyName: newCompany.companyName,
                organisationNumber: newCompany.organisationNumber,
                city: newCompany.city,
                address: newCompany.address,
                postalcode: newCompany.postalcode,
                jobTypes: newCompany.jobTypes,
                employeeCount: newCompany.employeeCount,
                useSubcontractors: newCompany.useSubcontractors,
                countyCoverage: newCompany.countyCoverage,
                categoryId: categoryId,
                categoryName: category?.name || 'Category not found', // Ensure category name is fetched correctly
                continentId: continentId,
                continentName: continent?.name || 'Continent not found',
                countryId: countryId,
                countryName: country?.name || 'Country not found',
                languageId: languageId,
                languageName: language?.name || 'Language not found',
                currencyId: currencyId,
                currencyName: currency?.name || 'Currency not found',
                currencySymbol: currency?.symbol || 'N/A',
                ProjectManagerRoleId: ProjectManagerRoleId,
                ProjectManagerRoleName: projectManagerRole?.name || 'Role not found',
                createdAt: newCompany.createdAt,
                updatedAt: newCompany.updatedAt,
            },
        });
    } catch (error) {
        console.error('Error registering company:', error);

        res.status(500).json({
            message: 'An error occurred while registering the company.',
            error: error.message,
        });
    }
};


module.exports = {
    registerCompany,
};
