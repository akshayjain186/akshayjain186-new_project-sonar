const { User, Company, OwnerUsers, Role } = require('../models');

// Get all users associated with a roleId along with their associated companies
const getUsersByRoleWithCompany = async (req, res) => {
  const { roleId } = req.params; // Get roleId from request parameters

  if (!roleId) {
    return res.status(400).json({ message: 'roleId is required' });
  }

  try {
    // Find users based on roleId and their associated company, also include roleName
    const users = await User.findAll({
      include: [
        {
          model: UserRoleCompany,
          where: { roleId }, // Filter based on roleId
          include: [
            {
              model: Company, // Include associated company details
              attributes: ['companyId', 'companyName', 'location']
            }
          ]
        },
        {
          model: Role, // Include roleName for each user
          where: { roleId }, // Ensure the roleId is matched
          attributes: ['roleName']
        }
      ]
    });

    // If no users are found, return a 404 error
    if (users.length === 0) {
      return res.status(404).json({ message: `No users found for roleId ${roleId}` });
    }

    // Format the response with user details, roleName, and associated company information
    const userData = users.map(user => ({
      userId: user.userId,
      userName: user.userName,
      email: user.email,
      roleName: user.Roles[0] ? user.Roles[0].roleName : null, // Extract roleName from the included Role model
      companies: user.UserRoleCompanies.map(urc => urc.Company) // Extract the associated companies
    }));

    // Return the users, roleName, and associated companies
    return res.status(200).json({
      message: 'Users and associated companies retrieved successfully',
      data: userData
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error retrieving users and companies', error });
  }
};

module.exports = {
  getUsersByRoleWithCompany
};
