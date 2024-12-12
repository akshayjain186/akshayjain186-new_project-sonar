const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const Country = require('../models/countriesModel');
const Currency = require('../models/currencyModel');
const Language = require('../models/languagesModel');
const Continent = require('../models/continentsModel');
const User = require('../models/userModel');
const UserInfo = require('../models/userInfoModel');
const Role = require('../models/roleModel');


/**
 * Registers a new user in the database with role-based authorization.
 *
 * @param {Object} req - The request object containing the user's registration details.
 * @param {string} req.body.name - The name of the new user.
 * @param {string} req.body.surname - The surname of the new user.
 * @param {string} req.body.email - The email address of the new user.
 * @param {number|string} req.body.roleId - The role ID of the new user (as number or string).
 * @param {number} req.body.mobile_no - The mobile number of the new user.
 * @param {boolean|string} req.body.isActive - The active status of the user (as boolean or string).
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {void} - Sends a JSON response with the new user's details or an error message.
 */

//  function to generate a random password
const generatePassword = () => {
  return crypto.randomBytes(4).toString('hex');

};

// Nodemailer 
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, // Replace with your email address
    pass: process.env.EMAIL_PASSWORD, // Replace with your email password or app-specific password
  },
});

const registerUser = async (req, res) => { 
  
  const {
    name,
    surname,
    email,
    roleId,
    mobile_no,
    isActive,
    continent_id,
    country_id,
    currency_id,
    language_id,
    address,
    city,
    postal_code,
    organization_number,
  } = req.body;

  const allowedRoleIds = [1, 2, 3, 4, 5];

  try {
    // Validate roleId
    const numericRoleId = parseInt(roleId, 10);
    if (!allowedRoleIds.includes(numericRoleId)) {
      return res.status(403).json({
        error: 'You are not authorized to register users with this role.',
      });
    }

    // Fetch role from 'roles' table
    const role = await Role.findByPk(numericRoleId); 
    if (!role) return res.status(400).json({
      error: 'Invalid role ID.'
    });

    // Validate required fields
    const requiredFields = {
      name,
      surname,
      email,
      mobile_no,
      continent_id,
      country_id,
      currency_id,
      language_id,
      city,
      postal_code,
      organization_number,
    };

    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res.status(400).json({
          error: `${key} is required.`
        });
      }
    }

    //  This Validate foreign keys
    const [continent, country, currency, language] = await Promise.all([
      Continent.findByPk(continent_id),
      Country.findByPk(country_id),
      Currency.findByPk(currency_id),
      Language.findByPk(language_id),
    ]);

    if (!continent)
      return res.status(400).json({
        error: 'Invalid continent_id.'
      });
    if (!country) return res.status(400).json({
      error: 'Invalid country_id.'
    });
    if (!currency)
      return res.status(400).json({
        error: 'Invalid currency_id.'
      });
    if (!language)
      return res.status(400).json({
        error: 'Invalid language_id.'
      });

    // Generate and hash the password
    const generatedPassword = generatePassword();
    console.log(
      '--------password for the login user----------->>>>',
      generatedPassword
    );
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(generatedPassword, salt);

    // Create the user
    const newUser = await User.create({
      name,
      surname,
      email,
      password: hashedPassword,
      mobile_no,
      roleId: numericRoleId,
      isActive: isActive === 'true' || isActive === true,
    });

    // Create additional user information
    const newUserInfo = await UserInfo.create({
      userId: newUser.id,
      continent_id,
      country_id,
      currency_id,
      language_id,
      address: address || null,
      city,
      postal_code,
      organization_number,
    });

    // Send email with the password
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Our Service',
      text: `Hello ${name} ${surname},\n\nYour account has been successfully created.\n\nYour login credentials are:\nEmail: ${email}\nPassword: ${generatedPassword}\n\nPlease change your password after logging in for the first time.\n\nThank you,\nTeam`,
    });

    // success Response
    res.status(201).json({
      message: 'User registered successfully. Password has been sent to the registered email address.',
      user: {
        id: newUser.id,
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        mobile_no: newUser.mobile_no,
        roleId: role.roleId,
        roleName: role.name,
        isActive: newUser.isActive,
        // userInfo: {
          continent: continent.name,
          country: country.name,
          currency: currency.name,
          language: language.name,
          address: newUserInfo.address,
          city: newUserInfo.city,
          postal_code: newUserInfo.postal_code,
          organization_number: newUserInfo.organization_number,
        // },
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res
        .status(409)
        .json({
          error: 'Email or mobile number already in use.'
        });
    }
    res.status(500).json({
      error: 'Server Error. Could not register user.'
    });
  }
};

/**
 * Authenticates a user and generates a JWT token.
 *
 * @param {Object} req - The request object containing the user's login credentials.
 * @param {string} req.body.email - The email address of the user attempting to log in.
 * @param {string} req.body.password - The plain text password of the user.
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {void} - Sends a JSON response with a JWT token or an error message.
 *
 * @throws {Error} - Returns a 500 status code if a server error occurs.
 */

const loginUser = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(400).json({
        message: 'User not found'
      });
    }

    // Compare the password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid credentials'
      });
    }

    // Fetch role details using roleId
    const role = await Role.findOne({
      where: {
        id: user.roleId
      }
    });

    if (!role) {
      return res.status(400).json({
        message: 'Role not found'
      });
    }

    // Generate JWT token
    const token = jwt.sign({
      userId: user.id
    }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    const userData = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      mobile_no: user.mobile_no,
      role,
      isActive: user.isActive,
    };

    return res.json({
      token,
      userData
    });
  } catch (error) {
    console.error('Login error: ', error);
    return res.status(500).json({
      error: 'Server Error'
    });
  }
};


/**
 * Retrieves all users based on filtering, pagination, and search criteria, and groups them by continent.
 *
 * @param {Object} req - The request object containing query parameters.
 * @param {Object} req.query - The query parameters of the request.
 * @param {string} req.query.roleId - The optional role ID to filter users by their role.
 * @param {string} req.query.search - The optional search term to filter users  country, continent, or currency,
 * @param {number} req.query.page - The page number for pagination (default is 1).
 * @param {number} req.query.limit - The number of users to fetch per page (default is 10).
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {void} - Sends a JSON response with user data, grouped by continent, and pagination metadata.
 *
 * @throws {Error} - Returns a 500 status code if a server error occurs during the operation.
 * @throws {Error} - Returns a 404 status code if no users are found matching the search or filter criteria.
 */

const getAllUsers = async (req, res) => {
  try {
    const { roleId, search, page = 1, limit = 10 } = req.query;

    // Filter users based on roleId 
    const whereClause = roleId ? { roleId } : {};

    // Calculate for pagination
    const offset = (page - 1) * limit;

    // Fetch users with pagination
    const { rows: users, count: totalUsers } = await User.findAndCountAll({
      where: whereClause,
      attributes: { exclude: ['password'] },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    if (users.length === 0) {
      return res.status(404).json({
        message: 'No users found.',
      });
    }

    // Process users and add additional info
    const usersWithInfo = await Promise.all(
      users.map(async (user) => {
        const userInfo = await UserInfo.findOne({ where: { userId: user.id } });
        const countryData = userInfo ? await Country.findByPk(userInfo.country_id) : null;
        const continentData = userInfo ? await Continent.findByPk(userInfo.continent_id) : null;
        const currencyData = userInfo ? await Currency.findByPk(userInfo.currency_id) : null;

        return {
          id: user.id,
          name: user.name,
          surname: user.surname,
          email: user.email,
          mobile_no: user.mobile_no,
          roleId: user.roleId,
          address: userInfo?.address || null,
          city: userInfo?.city || null,
          postal_code: userInfo?.postal_code || null,
          country: countryData?.name || null,
          continent: continentData?.name || null,
          currency: currencyData?.name || null,
          organization_number: userInfo?.organization_number || null,
        };
      })
    );

    // Filter users based on the search parameter
    const filteredUsers = search
      ? usersWithInfo.filter(
          (user) =>
            (user.country && user.country.toLowerCase().includes(search.toLowerCase())) ||
            (user.continent && user.continent.toLowerCase().includes(search.toLowerCase())) ||
            (user.currency && user.currency.toLowerCase().includes(search.toLowerCase())) ||
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.surname.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        )
      : usersWithInfo;

    if (filteredUsers.length === 0) {
      return res.status(404).json({
        message: 'No users found for the specified criteria.',
      });
    }

    // Group users by continent
    const usersGroupedByContinent = filteredUsers.reduce((acc, user) => {
      const continent = user.continent || 'Unknown'; 
      if (!acc[continent]) {
        acc[continent] = [];
      }
      acc[continent].push(user);
      return acc;
    }, {});

    // Pagination metadata
    const totalPages = Math.ceil(totalUsers / limit);
    const currentPage = parseInt(page);

    // Generate HTTPS links for pagination
    const protocol = req.protocol === 'http' ? 'https' : req.protocol;
    const host = req.get('host');

    const previousPage =
      currentPage > 1 ? `${protocol}://${host}/users?page=${currentPage - 1}&limit=${limit}` : null;

    const nextPage =
      currentPage < totalPages ? `${protocol}://${host}/users?page=${currentPage + 1}&limit=${limit}` : null;

    res.status(200).json({
      message: 'Users retrieved successfully',
      data: usersGroupedByContinent,
      pagination: {
        // totalUsers,
        currentPage,
        totalPages,
        previousPage,
        nextPage,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Server Error. Could not fetch users.',
    });
  }
};

/**
 * Retrieves a user by their ID and returns detailed user information, including associated data like continent, country, currency, and language.
 *
 * @param {Object} req - The request object containing route parameters and query information.
 * @param {Object} req.params - The route parameters of the request.
 * @param {string} req.params.id - The ID of the user to retrieve.
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {void} - Sends a JSON response containing the user data, including user information (address, city, continent, country, currency, language, etc.).
 *
 * @throws {Error} - Returns a 500 status code if a server error occurs during the operation.
 * @throws {Error} - Returns a 404 status code if the user with the specified ID is not found.
 */


const getUserById = async (req, res) => {
  const userId = req.params.id; 
  try {
    const user = await User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ['password'],  
      },
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found.',
      });
    }
    const userInfo = await UserInfo.findOne({
      where: { userId: user.id },
    });
    const continent = userInfo ? await Continent.findByPk(userInfo.continent_id) : null;
    const country = userInfo ? await Country.findByPk(userInfo.country_id) : null;
    const currency = userInfo ? await Currency.findByPk(userInfo.currency_id) : null;
    const language = userInfo ? await Language.findByPk(userInfo.language_id) : null;

    const userWithInfo = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      mobile_no: user.mobile_no,
      // userInfo: userInfo ? {
        address: userInfo.address,
        city: userInfo.city,
        postal_code: userInfo.postal_code,
        continent: continent ? continent.name : null,
        country: country ? country.name : null,
        currency: currency ? currency.name : null,
        language: language ? language.name : null,
        organization_number: userInfo.organization_number,
      // } : {},
    };

    res.status(200).json({
      message: 'User retrieved successfully',
      data: userWithInfo,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      error: 'Server Error. Could not fetch user.',
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
};