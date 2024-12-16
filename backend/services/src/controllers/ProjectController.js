const SmallProject = require('../models/Project');
const ProjectSubcategory = require('../models/ProjectSubcategory');
const Category = require('../models/categoryModel');
const Subcategory = require('../models/subcategoryModel');
const Projectmanagerole = require('../models/projectmanagerole');
const User = require('../../../user-service/src/models/userModel');
const UserserviceInfo = require('../models/userserviceInfo')
const role = require('../models/roleModel')
const jwt = require('jsonwebtoken'); 

const { Op } = require('sequelize');
const nodemailer = require('nodemailer');

const bcrypt = require('bcryptjs');
const crypto = require('crypto');

//  This Function is Used to Generate a Random Password
require('dotenv').config(); 

// Utility function for password generation (remains the same)
const generatePassword = () => {
  return Math.random().toString(36).slice(-8); 
};

// Set up your email transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.EMAIL_SERVICE, 
    pass: process.env.EMAIL_PASSWORD, 
  },
});

const registerSmallProject = async (req, res) => {
  try {
    const {
      name, // Project name
      type_of_project,
      category_id = [], 
      subcategory_id = [],
      projectmanagerole_id = [], 
      typeOfHome,
      projectAddress,
      city,
      generalComment,
      selectsubcategory = [], 
      users = [],
      userServiceInfo, 
    } = req.body;
    if (
      !name ||
      !type_of_project ||
      !category_id.length ||
      !subcategory_id.length ||
      !projectmanagerole_id.length ||
      !typeOfHome ||
      !projectAddress ||
      !city
    ) {
      return res.status(400).json({
        message: "Some required fields are missing.",
        status: "error",
      });
    }
    const categories = await Category.findAll({ where: { id: category_id } });
    const projectManagerRoles = await Projectmanagerole.findAll({
      where: { id: projectmanagerole_id },
    });

    if (categories.length !== category_id.length) {
      return res.status(400).json({
        message: "Some category IDs are invalid.",
        status: "error",
      });
    }

    if (projectManagerRoles.length !== projectmanagerole_id.length) {
      return res.status(400).json({
        message: "Some project manager role IDs are invalid.",
        status: "error",
      });
    }

    // Create users
    const createdUsers = [];
    let firstUserId = null;

    if (Array.isArray(users)) {
      for (const user of users) {
        const { name: userName, surname, email, mobile_no, roleId } = user;

        if (!userName || !surname || !email || !mobile_no || !roleId) {
          return res.status(400).json({
            message: "User details are incomplete.",
            status: "error",
          });
        }
        if (roleId !== 5) {
          continue; 
        }

        const generatedPassword = generatePassword();
        console.log("password ************** for ************** login ****************", generatedPassword);

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
        const userRole = await role.findByPk(roleId); 
        const roleName = userRole ? userRole.name : "Unknown";

        createdUsers.push({
          ...newUser.toJSON(),
          password: generatedPassword, 
          roleName, 
        });
        if (!firstUserId) {
          firstUserId = newUser.id;
        }

        // Send email to the user
        await transporter.sendMail({
          from: process.env.EMAIL_SERVICE,
          to: email,
          subject: "Welcome to Our Platform",
          text: `Hello ${userName},\n\nYour account has been created. Use the following credentials:\nEmail: ${email}\nPassword: ${generatedPassword}`,
        });
      }
    }
    if (!firstUserId) {
      return res.status(400).json({
        message: "No valid user found to associate with the project.",
        status: "error",
      });
    }

    // Create SmallProject with userId
    const smallProject = await SmallProject.create({
      name,
      type_of_project,
      category_id: category_id.join(","), 
      subcategory_id: subcategory_id.join(","),
      projectmanagerole_id: projectmanagerole_id.join(","),
      typeOfHome,
      projectAddress,
      city,
      generalComment,
      userId: firstUserId, 
    });
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

        const subcategoryDetails = await Subcategory.findByPk(id);
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
          subcategoryName, 
        });
      }
    }
    let userServiceInfoResponse = null;

    if (userServiceInfo && firstUserId) {
      const { typeOfHome, address, city, generalComment } = userServiceInfo;

      if (!typeOfHome || !address || !city) {
        return res.status(400).json({
          message: "User service info details are incomplete.",
          status: "error",
        });
      }

      userServiceInfoResponse = await UserserviceInfo.create({
        userId: firstUserId, 
        typeOfHome,
        address,
        city,
        generalComment,
      });
    }
    return res.status(201).json({
      message:
        "Small Project, subcategories, users, and user service info created successfully.",
      project: {
        id: smallProject.id,
        name: smallProject.name,
        categoryNames: categories.map((cat) => cat.title), 
        projectManagerRoleNames: projectManagerRoles.map((role) => role.name), 
        ...smallProject.toJSON(),
      },
      subcategories: createdSubcategories,
      users: createdUsers,
      userServiceInfo: userServiceInfoResponse
        ? {
            ...userServiceInfoResponse.toJSON(),
            userName: createdUsers[0]?.name, 
          }
        : null,
    });
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
    const response = [];

    for (const project of smallProjects) {
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
      const category = await Category.findOne({
        where: { id: project.category_id },
        attributes: ["id", "title"],
      });

      const projectManagerRole = await Projectmanagerole.findOne({
        where: { id: project.projectmanagerole_id },
        attributes: ["id", "name"],
      });

      console.log(
        `Project Manager Role for Project ID ${project.id}:`,
        projectManagerRole
      );
      const user = await User.findOne({
        where: { id: project.userId },
        attributes: ["name", "surname", "email", "mobile_no", "roleId"],
      });

      let roleName = "Unknown";
      if (user?.roleId) {
        const roleModel = await role.findOne({
          where: { id: user.roleId },
          attributes: ["name"],
        });
        roleName = roleModel?.name || "Unknown";
      }
      const userServiceInfo = await UserserviceInfo.findOne({
        where: { userId: project.userId },
        attributes: ["typeOfHome", "address", "city", "generalComment"],
      });

      console.log(
        `UserServiceInfo for Project ID ${project.id}:`,
        userServiceInfo
      );

      const projectResponse = {
        id: project.id,
        name: project.name,
        type_of_project: project.type_of_project,
        projectAddress: project.projectAddress,
        city: project.city,
        generalComment: project.generalComment,
        category: {
          id: category?.id || null,
          name: category?.title || "Unknown",
        },
        projectManagerRole: {
          id: projectManagerRole?.id || null,
          name: projectManagerRole?.name || "Unknown",
        },
        subcategories: subcategories.map((subcategory) => ({
          id: subcategory.id,
          subcategory_id: subcategory.subcategory_id,
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
              roleName,
            }
          : null,
      };

      console.log(
        `Constructed Response for Project ID ${project.id}:`,
        projectResponse
      );

      response.push(projectResponse);
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

const getProjectsByJobType = async (req, res) => {
  try {
    const { jobType } = req.query;

    if (!jobType) {
      console.log("Job type is required.");
      return res.status(400).json({
        message: "Job type is required.",
        status: "error",
      });
    }

    console.log("Step 1: Job type from query parameters:", jobType);
    const smallProjects = await SmallProject.findAll({
      where: { type_of_project: jobType },
    });

    if (!smallProjects || smallProjects.length === 0) {
      console.log(`No projects found for job type: ${jobType}`);
      return res.status(404).json({
        message: "No projects found for the specified job type.",
        data: [],
        status: "error",
      });
    }
    const response = await Promise.all(smallProjects.map(async (project) => {
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

      const category = await Category.findOne({
        where: { id: project.category_id },
        attributes: ["id", "title"],
      });

      const projectManagerRole = await Projectmanagerole.findOne({
        where: { id: project.projectmanagerole_id },
        attributes: ["id", "name"],
      });

      const user = await User.findOne({
        where: { id: project.userId },
        attributes: ["name", "surname", "email", "mobile_no", "roleId"],
      });

      let roleName = "Unknown";
      if (user?.roleId) {
        const roleModel = await role.findOne({
          where: { id: user.roleId },
          attributes: ["name"],
        });
        roleName = roleModel?.name || "Unknown";
      }

      const userServiceInfo = await UserserviceInfo.findOne({
        where: { userId: project.userId },
        attributes: ["typeOfHome", "address", "city", "generalComment"],
      });

      return {
        id: project.id,
        name: project.name,
        type_of_project: project.type_of_project,
        projectAddress: project.projectAddress,
        city: project.city,
        generalComment: project.generalComment,
        category: {
          id: category?.id || null,
          name: category?.title || "Unknown",
        },
        projectManagerRole: {
          id: projectManagerRole?.id || null,
          name: projectManagerRole?.name || "Unknown",
        },
        subcategories: subcategories.map((subcategory) => ({
          id: subcategory.id,
          subcategory_id: subcategory.subcategory_id,
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
              roleName,
            }
          : null,
      };
    }));
    console.log("Final Response:", response);
    return res.status(200).json({
      message: "Projects retrieved successfully.",
      data: response,
      status: "success",
    });
  } catch (error) {
    console.error("Error retrieving projects by job type:", error);
    return res.status(500).json({
      message: "An error occurred while fetching projects by job type.",
      error: error.message,
      status: "error",
    });
  }
};

module.exports = {
  registerSmallProject,
  getSmallProject,
  getProjectsByJobType
};
