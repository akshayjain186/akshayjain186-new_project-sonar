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

// Helper function to generate a random password
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
    const role = await Role.findByPk(numericRoleId); // assuming Role is your model for the 'roles' table
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

    // Validate foreign keys
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

    // Respond with success
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
        userInfo: {
          continent: continent.name,
          country: country.name,
          currency: currency.name,
          language: language.name,
          address: newUserInfo.address,
          city: newUserInfo.city,
          postal_code: newUserInfo.postal_code,
          organization_number: newUserInfo.organization_number,
        },
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

    // Compare the password
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

    // userData object
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
 * Initiates the password reset process by generating a token and sending a reset email.
 *
 * @param {Object} req - The request object containing the user's email.
 * @param {string} req.body.email - The email address of the user requesting a password reset.
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {void} - Sends a JSON response with success or error details.
 *
 * @throws {Error} - Returns a 500 status code if a server error occurs.
 */

const forgotPassword = async (req, res) => {
  const {
    email
  } = req.body;

  try {
    // Check if the user exists
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

    // Generate a secure token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

    // Save the reset token and expiry in the database
    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    await user.save();

    // Create the reset link
    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'your-email-service', // e.g., Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request',
      text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.json({
      message: 'Password reset link sent to your email.'
    });
  } catch (error) {
    console.error('Forgot password error: ', error);
    return res.status(500).json({
      error: 'Server Error'
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    
    const users = await User.findAll({
      attributes: {
        exclude: ['password'], 
      },
    });

    if (users.length === 0) {
      return res.status(404).json({
        message: 'No users found.',
      });
    }
    const usersWithInfo = await Promise.all(users.map(async (user) => {
      const userInfo = await UserInfo.findOne({
        where: { userId: user.id },
      });

      const continent = userInfo ? await Continent.findByPk(userInfo.continent_id) : null;
      const country = userInfo ? await Country.findByPk(userInfo.country_id) : null;
      const currency = userInfo ? await Currency.findByPk(userInfo.currency_id) : null;
      const language = userInfo ? await Language.findByPk(userInfo.language_id) : null;

      return {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        mobile_no: user.mobile_no,
        userInfo: userInfo ? {
          address: userInfo.address,
          city: userInfo.city,
          postal_code: userInfo.postal_code,
          continent: continent ? continent.name : null,
          country: country ? country.name : null,
          currency: currency ? currency.name : null,
          language: language ? language.name : null,
          organization_number: userInfo.organization_number,
        } : {},
      };
    }));

    res.status(200).json({
      message: 'Users retrieved successfully',
      data: usersWithInfo,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server Error. Could not fetch users.',
    });
  }
};

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
      userInfo: userInfo ? {
        address: userInfo.address,
        city: userInfo.city,
        postal_code: userInfo.postal_code,
        continent: continent ? continent.name : null,
        country: country ? country.name : null,
        currency: currency ? currency.name : null,
        language: language ? language.name : null,
        organization_number: userInfo.organization_number,
      } : {},
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
  forgotPassword,
  getAllUsers,
  getUserById,
};