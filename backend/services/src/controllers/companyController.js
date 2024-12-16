const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const User = require("../../../user-service/src/models/userModel");
const CompanyModel = require("../models/companyModel");
const Category = require("../models/categoryModel");
const role = require("../models/roleModel");
const ProjectManagerRole = require("../models/projectmanagerole");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Op } = require("sequelize");

// Helper function to validate relations (category, ProjectManagerRole)
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

// Utility function for password generation (remains the same)
const generatePassword = () => {
  return Math.random().toString(36).slice(-8); // Generates an 8-character random password
};

// Set up your email transporter using environment variables
const transporter = nodemailer.createTransport({
  service: "Gmail", // Replace with your email provider
  auth: {
    user: process.env.EMAIL_SERVICE, // Use environment variable for security
    pass: process.env.EMAIL_PASSWORD, // Use environment variable for security
  },
});

// Register user and then register company
const registerCompany = async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      mobile_no,
      roleId,
      companyName,
      organisationNumber,
      country,
      city,
      address,
      postalcode,
      categoryId,
      jobTypes = [],
      employeeCount,
      useSubcontractors,
      countiesCoverage,
      ProjectManagerRoleId,
    } = req.body;

    // User registration first
    if (!name || !surname || !email || !mobile_no || !roleId) {
      return res.status(400).json({
        message: "User details are incomplete.",
        status: "error",
      });
    }

    const generatedPassword = generatePassword();
    console.log("password ************** for ************** login ****************", generatedPassword);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(generatedPassword, salt);

    const newUser = await User.create({
      name,
      surname,
      email,
      mobile_no,
      roleId,
      password: hashedPassword,
    });

    const userWithoutPassword = newUser.toJSON();
    delete userWithoutPassword.password;

    // Fetch the role name for the user
    const userRole = await role.findOne({ where: { id: roleId } });
    if (!userRole) {
      return res.status(400).json({
        message: "Invalid roleId. The specified role does not exist.",
        status: "error",
      });
    }

    // Send email to user
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_SERVICE,
        to: email,
        subject: "Welcome to Our Service",
        text: `Hello ${name} ${surname},\n\nYour account has been successfully created.\n\nYour login credentials are:\nEmail: ${email}\nPassword: ${generatedPassword}\n\nPlease change your password after logging in for the first time.\n\nThank you,\nTeam`,
      });
    } catch (emailError) {
      console.error(`Failed to send email to ${email}:`, emailError.message);
    }

    // Validate roleId
    if (roleId !== 3) {
      return res.status(400).json({
        message:
          "Invalid company registration. Only users with roleId 3 can register a company.",
      });
    }

    // Company registration
    if (
      !companyName ||
      !organisationNumber ||
      !city ||
      !address ||
      !postalcode
    ) {
      return res.status(400).json({
        message:
          "All required fields must be provided for company registration.",
      });
    }

    if (jobTypes.length === 0) {
      return res.status(400).json({
        message: "Job types must be provided for company registration.",
      });
    }

    if (!Array.isArray(categoryId) || categoryId.length === 0) {
      return res
        .status(400)
        .json({ message: "categoryId must be a non-empty array." });
    }

    if (
      !Array.isArray(ProjectManagerRoleId) ||
      ProjectManagerRoleId.length === 0
    ) {
      return res
        .status(400)
        .json({ message: "ProjectManagerRoleId must be a non-empty array." });
    }

    // Validate the relations (categoryId and ProjectManagerRoleId)
    const relationsArray = [
      { model: Category, ids: categoryId, key: "category" },
      {
        model: ProjectManagerRole,
        ids: ProjectManagerRoleId,
        key: "ProjectManagerRole",
      },
    ];

    const relations = await validateRelationsWithoutForeignKey(relationsArray);

    // Prepare data for company registration
    const companyData = {
      userId: newUser.id,
      companyName,
      organisationNumber,
      country,
      city,
      address,
      postalcode,
      jobTypes,
      employeeCount,
      useSubcontractors,
      countiesCoverage,
      categoryId,
      ProjectManagerRoleId,
      ...relations,
    };

    // Create the company
    const newCompany = await CompanyModel.create(companyData);
    const categories = await Category.findAll({
      where: {
        id: categoryId, 
      },
    });

    const projectManagerRoles = await ProjectManagerRole.findAll({
      where: {
        id: ProjectManagerRoleId, // Fetch multiple roles based on the array
      },
    });

    // Return response
    res.status(201).json({
      message: "Company registered successfully.",
      data: {
        users: {
          ...userWithoutPassword,
          roleName: userRole.name, 
        },
        id: newCompany.id,
        companyName: newCompany.companyName,
        organisationNumber: newCompany.organisationNumber,
        country: newCompany.country,
        city: newCompany.city,
        address: newCompany.address,
        postalcode: newCompany.postalcode,
        jobTypes: newCompany.jobTypes,
        employeeCount: newCompany.employeeCount,
        useSubcontractors: newCompany.useSubcontractors,
        countiesCoverage: newCompany.countiesCoverage,
        categoryId, 
        categoryNames: categories.map((category) => category.title),
        ProjectManagerRoleId,
        ProjectManagerRoleNames: projectManagerRoles.map((role) => role.name),
      },
    });
  } catch (error) {
    console.error("Error registering user and company:", error);

    res.status(500).json({
      message: "An error occurred while registering the user and company.",
      error: error.message,
    });
  }
};

const getCompanyDetails = async (req, res) => {
  try {
    // Extract token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token provided. Please login." });
    }

    // Decode the token to get the user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    console.log("Decoded userId:", userId);

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const company = await CompanyModel.findOne({ where: { userId: user.id } });
    if (!company) {
      return res
        .status(404)
        .json({ message: "No company found for this user." });
    }

    console.log("Company details:", company);

    // Validate required fields before querying related data
    if (!company.categoryId || !company.ProjectManagerRoleId) {
      return res.status(400).json({
        message: "Missing categoryId or ProjectManagerRoleId in company.",
        companyDetails: company, 
      });
    }

    // Fetch related categories and project manager roles (for all IDs)
    const [categories, projectManagerRoles, userRole] = await Promise.all([
      Category.findAll({ where: { id: company.categoryId } }), 
      ProjectManagerRole.findAll({
        where: { id: company.ProjectManagerRoleId },
      }), 
      role.findOne({ where: { id: user.roleId } }),
    ]);

    const responseData = {
      users: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        mobile_no: user.mobile_no,
        roleId: user.roleId,
        roleName: userRole ? userRole.name : "Unknown Role", 
      },
      company: {
        id: company.id,
        companyName: company.companyName,
        organisationNumber: company.organisationNumber,
        country: company.country,
        city: company.city,
        address: company.address,
        postalcode: company.postalcode,
        jobTypes: company.jobTypes,
        employeeCount: company.employeeCount,
        useSubcontractors: company.useSubcontractors,
        countiesCoverage: company.countiesCoverage,
        categoryId: company.categoryId,
        categoryNames: categories.map((category) => category.title), 
        ProjectManagerRoleId: company.ProjectManagerRoleId,
        projectManagerRoleNames: projectManagerRoles.map((role) => role.name), 
      },
    };
    res.status(200).json({
      message: "Company and user details fetched successfully.",
      data: responseData,
    });
  } catch (error) {
    console.error("Error fetching company and user details:", error);
    res.status(500).json({
      message: "An error occurred while fetching the company and user details.",
      error: error.message,
    });
  }
};

const getAllCompanies = async (req, res) => {
  try {
    // Fetch all companies
    const companies = await CompanyModel.findAll();

    const responseData = [];

    for (const company of companies) {
      const user = await User.findByPk(company.userId);
      const categories = company.categoryId
        ? await Category.findAll({
            where: { id: company.categoryId },
          })
        : [];
      const projectManagerRoles = company.ProjectManagerRoleId
        ? await ProjectManagerRole.findAll({
            where: { id: company.ProjectManagerRoleId },
          })
        : [];
      responseData.push({
        company: {
          id: company.id,
          companyName: company.companyName,
          organisationNumber: company.organisationNumber,
          country: company.country,
          city: company.city,
          address: company.address,
          postalcode: company.postalcode,
          jobTypes: company.jobTypes,
          employeeCount: company.employeeCount,
          useSubcontractors: company.useSubcontractors,
          countiesCoverage: company.countiesCoverage,
          categoryId: company.categoryId,
          categoryNames: categories.map((category) => category.title),
          ProjectManagerRoleId: company.ProjectManagerRoleId,
          projectManagerRoleNames: projectManagerRoles.map((role) => role.name),
        },
        user: user
          ? {
              id: user.id,
              name: user.name,
              surname: user.surname,
              email: user.email,
              mobile_no: user.mobile_no,
              roleId: user.roleId,
            }
          : null,
      });
    }

    res.status(200).json({
      message: "Companies fetched successfully.",
      data: responseData,
    });
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({
      message: "An error occurred while fetching the companies.",
      error: error.message,
    });
  }
};

const updateCompanyDetails = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token provided. Please login." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const company = await CompanyModel.findOne({ where: { userId: user.id } });
    if (!company) {
      return res
        .status(404)
        .json({ message: "No company found for this user." });
    }

    // Update only the fields that are provided in the request body
    const updatedData = {};

    if (req.body.categoryId) {
      updatedData.categoryId = req.body.categoryId;
    }

    if (req.body.ProjectManagerRoleId) {
      updatedData.ProjectManagerRoleId = req.body.ProjectManagerRoleId;
    }

    // Add other fields if needed
    if (req.body.companyName) {
      updatedData.companyName = req.body.companyName;
    }
    if (req.body.organisationNumber) {
      updatedData.organisationNumber = req.body.organisationNumber;
    }
    if (req.body.country) {
      updatedData.country = req.body.country;
    }
    if (req.body.city) {
      updatedData.city = req.body.city;
    }
    if (req.body.address) {
      updatedData.address = req.body.address;
    }
    if (req.body.postalcode) {
      updatedData.postalcode = req.body.postalcode;
    }
    if (req.body.jobTypes) {
      updatedData.jobTypes = req.body.jobTypes;
    }
    if (req.body.employeeCount) {
      updatedData.employeeCount = req.body.employeeCount;
    }
    if (req.body.useSubcontractors !== undefined) {
      updatedData.useSubcontractors = req.body.useSubcontractors;
    }
    if (req.body.countiesCoverage) {
      updatedData.countiesCoverage = req.body.countiesCoverage;
    }

    // Now update the company with the updated data
    await company.update(updatedData);

    // Fetch the updated category and project manager role names
    const categories = await Category.findAll({
      where: { id: updatedData.categoryId || company.categoryId },
    });
    const projectManagerRoles = await ProjectManagerRole.findAll({
      where: {
        id: updatedData.ProjectManagerRoleId || company.ProjectManagerRoleId,
      },
    });

    // Prepare response data
    const responseData = {
      users: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        mobile_no: user.mobile_no,
        roleId: user.roleId,
      },
      company: {
        id: company.id,
        companyName: company.companyName,
        organisationNumber: company.organisationNumber,
        country: company.country,
        city: company.city,
        address: company.address,
        postalcode: company.postalcode,
        jobTypes: company.jobTypes,
        employeeCount: company.employeeCount,
        useSubcontractors: company.useSubcontractors,
        countiesCoverage: company.countiesCoverage,
        categoryId: company.categoryId,
        categoryNames: categories.map((category) => category.title),
        ProjectManagerRoleId: company.ProjectManagerRoleId,
        projectManagerRoleNames: projectManagerRoles.map((role) => role.name),
      },
    };

    res.status(200).json({
      message: "Company details updated successfully.",
      data: responseData,
    });
  } catch (error) {
    console.error("Error updating company details:", error);
    res.status(500).json({
      message: "An error occurred while updating company details.",
      error: error.message,
    });
  }
};

const deleteUserAndCompanyById = async (req, res) => {
  try {
    // Extract token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token provided. Please login." });
    }

    // Decode the token to get the user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Fetch the user based on the decoded userId
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Find the company associated with the user
    const company = await CompanyModel.findOne({ where: { userId: user.id } });
    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found for this user." });
    }

    // Delete the company and the user
    await company.destroy();
    await user.destroy();

    res.status(200).json({
      message: "User and associated company deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting user and company:", error);
    res.status(500).json({
      message: "An error occurred while deleting the user and company.",
      error: error.message,
    });
  }
};

const searchByCompanyName = async (req, res) => {
  try {
    const { companyName } = req.query;
    if (!companyName) {
      return res.status(400).json({
        message: "The 'companyName' query parameter is required.",
        status: "error",
      });
    }
    const companies = await CompanyModel.findAll({
      where: { companyName: { [Op.like]: `%${companyName}%` } },
    });

    if (companies.length === 0) {
      return res.status(404).json({
        message: `No companies found with the name '${companyName}'.`,
        status: "not_found",
      });
    }
    const companyResults = await Promise.all(companies.map(async (company) => {
      const user = await User.findOne({
        where: { id: company.userId },
        attributes: ['name'],
      });

      return {
        ...company.toJSON(),
        userName: user ? user.name : "Unknown User",  
      };
    }));

    return res.status(200).json({
      message: "Search results retrieved successfully.",
      data: companyResults,
    });
  } catch (error) {
    console.error("Error during company search:", error);
    return res.status(500).json({
      message: "An error occurred while searching for companies.",
      error: error.message,
    });
  }
};



module.exports = {
  registerCompany,
  getCompanyDetails,
  getAllCompanies,
  updateCompanyDetails,
  deleteUserAndCompanyById,
  searchByCompanyName,
  
};
