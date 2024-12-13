const SmallProject = require("../models/Project");
const ProjectSubcategory = require("../models/ProjectSubcategory");
const Category = require("../models/categoryModel");
const Subcategory = require("../models/subcategoryModel");
const Projectmanagerole = require("../models/projectmanagerole");
const User = require("../../../user-service/src/models/userModel");
const UserserviceInfo = require("../models/userserviceInfo");
const role = require("../models/roleModel");
const jwt = require("jsonwebtoken"); 

const { Op } = require("sequelize");
const nodemailer = require("nodemailer");

const bcrypt = require("bcryptjs");
const crypto = require("crypto");

//  This Function is Used to Generate a Random Password
require("dotenv").config(); // For loading environment variables

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

const registerSmallProject = async (req, res) => {
  try {
    const {
      name, // Project name
      type_of_project,
      category_id,
      subcategory_id,
      projectmanagerole_id,
      typeOfHome,
      projectAddress,
      city,
      generalComment,
      selectsubcategory = [],
      users = [],
      userServiceInfo,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !type_of_project ||
      !category_id ||
      !subcategory_id ||
      !projectmanagerole_id ||
      !typeOfHome ||
      !projectAddress ||
      !city
    ) {
      return res.status(400).json({
        message: "Some required fields are missing.",
        status: "error",
      });
    }

    // Validate relations (category_id and projectmanagerole_id)
    const category = await Category.findByPk(category_id);
    const projectManagerRole = await Projectmanagerole.findByPk(
      projectmanagerole_id
    );

    if (!category) {
      return res.status(400).json({
        message: "Invalid category ID.",
        status: "error",
      });
    }

    if (!projectManagerRole) {
      return res.status(400).json({
        message: "Invalid project manager role ID.",
        status: "error",
      });
    }

    // Create users
    const createdUsers = [];
    if (Array.isArray(users)) {
      for (const user of users) {
        const { name: userName, surname, email, mobile_no, roleId } = user;

        if (!userName || !surname || !email || !mobile_no || !roleId) {
          return res.status(400).json({
            message: "User details are incomplete.",
            status: "error",
          });
        }

        // Only proceed if roleId is 5
        if (roleId !== 5) {
          continue; // Skip users who do not have roleId 5
        }

        const generatedPassword = generatePassword();
        console.log(
          "PASSWORD --------------------------------",
          generatedPassword
        );
        const hashedPassword = await bcrypt.hash(generatedPassword, 10);

        const newUser = await User.create({
          name: userName,
          surname,
          email,
          mobile_no,
          roleId,
          password: hashedPassword,
        });

        // Fetch role name based on roleId
        const userRole = await role.findByPk(roleId); // Assuming you have the 'role' model
        const roleName = userRole ? userRole.name : "Unknown";

        createdUsers.push({
          ...newUser.toJSON(),
          password: generatedPassword, // Include plain password for response
          roleName, // Include role name in response
        });

        // Send email to the user
        await transporter.sendMail({
          from: process.env.EMAIL_SERVICE,
          to: email,
          subject: "Welcome to Our Platform",
          text: `Hello ${userName},\n\nYour account has been created. Use the following credentials:\nEmail: ${email}\nPassword: ${generatedPassword}`,
        });

        // Use the userId after user creation to associate with the project
        const userId = newUser.id;

        // Create SmallProject
        const smallProjectData = {
          name, // Use project name here
          type_of_project,
          category_id,
          subcategory_id,
          projectmanagerole_id,
          typeOfHome,
          projectAddress,
          city,
          generalComment,
          userId,
        };

        const smallProject = await SmallProject.create(smallProjectData);

        // Process selectsubcategory
        const createdSubcategories = [];
        if (Array.isArray(selectsubcategory)) {
          for (const subcategory of selectsubcategory) {
            const { id, description, attachment, floor } = subcategory;

            if (!id || !description || !attachment || !floor) {
              return res.status(400).json({
                message:
                  "Each subcategory must include id, description, attachment, and floor.",
                status: "error",
              });
            }

            const subcategoryDetails = await Subcategory.findByPk(id); // Fetch subcategory details
            const subcategoryName = subcategoryDetails
              ? subcategoryDetails.name
              : "Unknown";

            const newSubcategory = await ProjectSubcategory.create({
              smallProject_id: smallProject.id,
              subcategory_id: id,
              description,
              attachment,
              floor,
            });
            createdSubcategories.push({
              ...newSubcategory.toJSON(),
              subcategoryName, // Add subcategory name to response
            });
          }
        }

        // Process userServiceInfo
        let userServiceInfoResponse = null;
        if (userServiceInfo) {
          const { typeOfHome, address, city, generalComment } = userServiceInfo;

          if (!typeOfHome || !address || !city) {
            return res.status(400).json({
              message: "User service info details are incomplete.",
              status: "error",
            });
          }

          userServiceInfoResponse = await UserserviceInfo.create({
            userId, // Use the userId from created user
            typeOfHome,
            address,
            city,
            generalComment,
          });
        }

        // Fetch category name and project manager role name
        const categoryName = category ? category.title : "Unknown";
        const projectManagerRoleName = projectManagerRole
          ? projectManagerRole.name
          : "Unknown";

        // Respond with created data including names
        return res.status(201).json({
          message:
            "Small Project, subcategories, users, and user service info created successfully.",
          project: {
            id: smallProject.id,
            name: smallProject.name,
            categoryName,
            projectManagerRoleName,
            ...smallProject.toJSON(),
          },
          subcategories: createdSubcategories, 
          users: createdUsers,
          userServiceInfo: userServiceInfoResponse
            ? {
                ...userServiceInfoResponse.toJSON(),
                userName: createdUsers[0].name, 
              }
            : null,
        });
      }
    }
  } catch (error) {
    console.error("Error registering small project:", error);
    return res.status(500).json({
      message: "An error occurred while registering the small project.",
      error: error.message,
      status: "error",
    });
  }
};

const getSmallProject = async (req, res) => {
  try {
    // Step 1: Extract user ID from the token
    const userId = req.user?.id;

    if (!userId) {
      console.log("User ID not found in token.");
      return res.status(401).json({
        message: "User ID not found in token.",
        status: "error",
      });
    }

    console.log("Step 1: User ID from token:", userId);

    // Step 2: Fetch small projects created by the user
    const smallProjects = await SmallProject.findAll({
      where: { userId },
    });

    if (!smallProjects || smallProjects.length === 0) {
      console.log(`No small projects found for user ID: ${userId}`);
      return res.status(404).json({
        message: "No small projects found for the user.",
        data: [],
        status: "error",
      });
    }

    console.log(
      `Step 2: Found ${smallProjects.length} small project(s) for user ID ${userId}`
    );

    // Step 3: Fetch related data for each project
    const response = [];

    for (const project of smallProjects) {
      console.log(`Processing Project ID: ${project.id}`);

      // Fetch related subcategories
      const subcategories = await ProjectSubcategory.findAll({
        where: { smallProject_id: project.id },
        attributes: [
          "id",
          "subcategory_id",
          "description",
          "attachment",
          "floor",
        ],
      });

      console.log(`Subcategories for Project ID ${project.id}:`, subcategories);

      // Fetch user service info
      const userServiceInfo = await UserserviceInfo.findOne({
        where: { userId: project.userId },
        attributes: ["typeOfHome", "address", "city", "generalComment"],
      });

      console.log(
        `UserServiceInfo for Project ID ${project.id}:`,
        userServiceInfo
      );

      // Fetch category name
      const category = await Category.findOne({
        where: { id: project.category_id },
        attributes: ["title"],
      });

      console.log(`Category for Project ID ${project.id}:`, category);

      // Fetch project manager role name
      const projectManagerRole = await Projectmanagerole.findOne({
        where: { id: project.projectmanagerole_id },
        attributes: ["name"],
      });

      console.log(
        `Project Manager Role for Project ID ${project.id}:`,
        projectManagerRole
      );

      // Fetch user details (user information)
      const user = await User.findOne({
        where: { id: project.userId },
        attributes: ["name", "surname", "email", "mobile_no", "roleId"],
      });

      // Fetch role name from role table based on roleId
      if (user && user.roleId) {
        const roleModel = await role.findOne({
          where: { id: user.roleId },
          attributes: ["name"],
        });

        console.log(`Role Info for User ID ${user?.id}:`, roleModel);

        // Construct project response
        const projectResponse = {
          id: project.id,
          name: project.name,
          type_of_project: project.type_of_project,
          projectAddress: project.projectAddress,
          city: project.city,
          generalComment: project.generalComment,
          categoryName: category?.title || "Unknown",
          projectManagerRoleName: projectManagerRole?.name || "Unknown",
          subcategories: subcategories.map((subcategory) => ({
            id: subcategory.id,
            subcategoryName: `Subcategory ${subcategory.subcategory_id}`,
            description: subcategory.description,
            attachment: subcategory.attachment,
            floor: subcategory.floor,
          })),
          userServiceInfo: userServiceInfo || null,
          user: user
            ? {
                name: user.name,
                surname: user.surname,
                email: user.email,
                mobile_no: user.mobile_no,
                roleName: roleModel?.name || "Unknown",
              }
            : null,
        };

        console.log(
          `Constructed Response for Project ID ${project.id}:`,
          projectResponse
        );

        response.push(projectResponse);
      } else {
        console.log("User or Role not found.");
      }
    }

    // Step 4: Send the final response
    console.log("Final Response:", response);
    return res.status(200).json({
      message: "Small projects retrieved successfully.",
      data: response,
      status: "success",
    });
  } catch (error) {
    console.error("Error retrieving small projects:", error);
    return res.status(500).json({
      message: "An error occurred while fetching small projects.",
      error: error.message,
      status: "error",
    });
  }
};

module.exports = {
  registerSmallProject,
  getSmallProject,
};
