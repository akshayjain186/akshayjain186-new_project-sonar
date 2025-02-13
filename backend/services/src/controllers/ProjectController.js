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

//Used to Generate a Random Password
require("dotenv").config();

/**
 * Registers a new small project, its subcategories, users, and associated user service information in the database.
 *
 * @param {Object} req - The request object containing the project and user details.
 * @param {string} req.body.name - The name of the new small project.
 * @param {string} req.body.type_of_project - The type of the project (e.g., residential, commercial).
 * @param {Array<number>} req.body.category_id - The list of category IDs that the project belongs to.
 * @param {Array<number>} req.body.subcategory_id - The list of subcategory IDs associated with the project.
 * @param {Array<number>} req.body.projectmanagerole_id - The list of project manager role IDs associated with the project.
 * @param {string} req.body.typeOfHome - The type of home being built or renovated.
 * @param {string} req.body.projectAddress - The physical address of the project.
 * @param {string} req.body.city - The city where the project is located.
 * @param {string} req.body.generalComment - Any additional general comments about the project.
 * @param {Array<Object>} req.body.selectsubcategory - A list of subcategories selected for the project, each containing details like ID, description, attachment, and floor number.
 * @param {Array<Object>} req.body.users - A list of user objects to be created, each containing user details like name, surname, email, mobile number, and role ID.
 * @param {Object} req.body.userServiceInfo - The user-specific service information containing type of home, address, city, and general comments.
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {Object} - Sends a JSON response with details of the created project, subcategories, users, and user service information, or an error message.
 */

// function for password generation
const generatePassword = () => {
  return Math.random().toString(36).slice(-8);
};

// your email transporter using environment variables
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_SERVICE,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const registerSmallProject = async (req, res) => {
  try {
    const {
      name,
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
            // userName: createdUsers[0]?.name,
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

/**
 * Retrieves  small projects created by a specific user, along with related data like subcategories,
 * categories, project manager roles, user information, and user service details.
 *
 * @param {Object} req - The request object containing the user's authentication details.
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {Object} - Sends a JSON response containing a list of the user's small projects or an error message.
 */

const getSmallProject = async (req, res) => {
  try {
    //  Extract user ID from the token
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "User ID not found in token.",
        status: "error",
      });
    }

    //  Fetch small projects created by the user
    const smallProjects = await SmallProject.findAll({
      where: { userId },
    });

    if (!smallProjects || smallProjects.length === 0) {
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

      response.push(projectResponse);
    }

    // Send the final response
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

/**
 * Retrieves all small projects created by users, along with related data like subcategories,
 * categories, project manager roles, user information, and user service details.
 *
 * @param {Object} req - The request object containing the client request data.
 * @param {Object} res - The response object used to send the HTTP response.
 *
 * @returns {Object} - Sends a JSON response containing a list of all small projects with related
 * data or an error message in case of failure. The response will include the project ID, name,
 * type, address, city, category, project manager role, associated subcategories, user information,
 * and user service details.
 */
const getAllSmallProjects = async (req, res) => {
  try {
    // Fetch all small projects
    const smallProjects = await SmallProject.findAll();

    if (!smallProjects || smallProjects.length === 0) {
      return res.status(404).json({
        message: "No small projects found.",
        data: [],
        status: "error",
      });
    }

    const response = [];

    for (const project of smallProjects) {
      // Fetch associated subcategories
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

      // Fetch associated category
      const category = await Category.findOne({
        where: { id: project.category_id },
        attributes: ["id", "title"],
      });

      // Fetch associated project manager role
      const projectManagerRole = await Projectmanagerole.findOne({
        where: { id: project.projectmanagerole_id },
        attributes: ["id", "name"],
      });

      // Fetch associated user information
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

      // Fetch associated user service info
      const userServiceInfo = await UserserviceInfo.findOne({
        where: { userId: project.userId },
        attributes: ["typeOfHome", "address", "city", "generalComment"],
      });

      // Construct the response object
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
      response.push(projectResponse);
    }

    // Send the final response
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

/**
 * Retrieves small projects filtered by the specified job type. For each project, it fetches
 * related data such as subcategories, category, project manager role, user information,
 * and user service details.
 * @param {Object} req - The request object that contains query parameters (specifically `jobType`).
 * @param {Object} res - The response object used to send back the HTTP response.
 *
 * @returns {Object} - A JSON response containing the list of projects filtered by job type,
 * along with related data such as subcategories, categories, project manager roles, and user details.
 * If no projects match the job type or an error occurs, an appropriate error message is returned.
 */

const getProjectsByJobType = async (req, res) => {
  try {
    const { jobType } = req.query;

    if (!jobType) {
      return res.status(400).json({
        message: "Job type is required.",
        status: "error",
      });
    }

    const smallProjects = await SmallProject.findAll({
      where: { type_of_project: jobType },
    });

    if (!smallProjects || smallProjects.length === 0) {
      return res.status(404).json({
        message: "No projects found for the specified job type.",
        data: [],
        status: "error",
      });
    }
    const response = await Promise.all(
      smallProjects.map(async (project) => {
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
      })
    );
    return res.status(200).json({
      message: "Projects retrieved successfully.",
      data: response,
      status: "success",
    });
  } catch (error) {
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
  getProjectsByJobType,
  getAllSmallProjects,
};
