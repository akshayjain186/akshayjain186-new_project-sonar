// const User = require('../models/userModel');
// const Role = require('../models/roleModel');
// const UserInfo = require('../models/userInfoModel')
// const bcrypt = require('bcryptjs');

// const seedUsers = async () => {
//   try {
//     const salt = await bcrypt.genSalt(10); // Await the salt generation
//     const hashedPassword = await bcrypt.hash('admin@123', salt); // Await password hashing

//     const controlAdminRole = await Role.findOne({ where: { machineName: 'control_admin' } }); // Added 'where'
//     if (!controlAdminRole) {
//       throw new Error("Role 'control_admin' not found in the database.");
//     }
//     const countryAdminRole = await Role.findOne({ where: { machineName: 'country_admin' } }); // Added 'where'
//     if (!countryAdminRole) {
//       throw new Error("Role 'country_admin' not found in the database.");
//     }
//     const superAdminRole = await Role.findOne({ where: { machineName: 'super_admin' } }); // Added 'where'
//     if (!superAdminRole) {
//       throw new Error("Role 'super_admin' not found in the database.");
//     }
//     const adminRole = await Role.findOne({ where: { machineName: 'admin' } }); // Added 'where'
//     if (!adminRole) {
//       throw new Error("Role 'admin' not found in the database.");
//     }

//     const userRole = await Role.findOne({ where: { machineName: 'user' } }); // Added 'where'
//     if (!userRole) {
//       throw new Error("Role 'user Role' not found in the database.");
//     }

//     const users = [
//       {
//         name: 'Control Admin',
//         surname: 'Control Admin',
//         email: 'controlAdmin@gmail.com',
//         password: hashedPassword, // Use the actual hashed password
//         mobile_no: '8959881549',
//         isActive: true,
//         roleId: controlAdminRole.id || null, // Use found role ID instead of hardcoded value
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Country Admin',
//         surname: 'Country Admin',
//         email: 'countryAdmin@gmail.com',
//         password: hashedPassword, // Use the actual hashed password
//         mobile_no: '8959881549',
//         isActive: true,
//         roleId: countryAdminRole.id || null, // Use found role ID instead of hardcoded value
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Super Admin',
//         surname: 'Super Admin',
//         email: 'superAdmin@gmail.com',
//         password: hashedPassword, // Use the actual hashed password
//         mobile_no: '8959881549',
//         isActive: true,
//         roleId: superAdminRole.id || null, // Use found role ID instead of hardcoded value
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Admin',
//         surname: 'Admin',
//         email: 'admin@gmail.com',
//         password: hashedPassword, // Use the actual hashed password
//         mobile_no: '8959881549',
//         isActive: true,
//         roleId: adminRole.id || null, // Use found role ID instead of hardcoded value
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'User',
//         surname: 'User',
//         email: 'user@gmail.com',
//         password: hashedPassword, // Use the actual hashed password
//         mobile_no: '8959881549',
//         isActive: true,
//         roleId: userRole.id || null, // Use found role ID instead of hardcoded value
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ];

//     for (const userData of users) {
//       const [user, created] = await User.findOrCreate({
//         where: { email: userData.email },
//         defaults: userData,
//       });

//       if (created) {
//         console.log(`Created user: ${user.email}`);
//       } else {
//         console.log(`User already exists: ${user.email}`);
//       }
//     }
//     console.log('Users seeded successfully.');
//   } catch (error) {
//     console.error('Error seeding users:', error);
//   }
// };

// module.exports = seedUsers;



const User = require('../models/userModel');
const Role = require('../models/roleModel');
const UserInfo = require('../models/userInfoModel')
const bcrypt = require('bcryptjs');

const seedUsers = async () => {
  try {
    const salt = await bcrypt.genSalt(10); // Await the salt generation
    const hashedPassword = await bcrypt.hash('admin@123', salt); // Await password hashing

    const controlAdminRole = await Role.findOne({ where: { machineName: 'control_admin' } }); // Added 'where'
    if (!controlAdminRole) {
      throw new Error("Role 'control_admin' not found in the database.");
    }
    const countryAdminRole = await Role.findOne({ where: { machineName: 'country_admin' } }); // Added 'where'
    if (!countryAdminRole) {
      throw new Error("Role 'country_admin' not found in the database.");
    }
    const superAdminRole = await Role.findOne({ where: { machineName: 'super_admin' } }); // Added 'where'
    if (!superAdminRole) {
      throw new Error("Role 'super_admin' not found in the database.");
    }
    const adminRole = await Role.findOne({ where: { machineName: 'admin' } }); // Added 'where'
    if (!adminRole) {
      throw new Error("Role 'admin' not found in the database.");
    }

    const userRole = await Role.findOne({ where: { machineName: 'user' } }); // Added 'where'
    if (!userRole) {
      throw new Error("Role 'user Role' not found in the database.");
    }

    const users = [
      {
        name: 'Control Admin',
        surname: 'Control Admin',
        email: 'controlAdmin@gmail.com',
        password: hashedPassword, // Use the actual hashed password
        mobile_no: '8959881549',
        isActive: true,
        roleId: controlAdminRole.id || null, // Use found role ID instead of hardcoded value
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Country Admin',
        surname: 'Country Admin',
        email: 'countryAdmin@gmail.com',
        password: hashedPassword, // Use the actual hashed password
        mobile_no: '8959881549',
        isActive: true,
        roleId: countryAdminRole.id || null, // Use found role ID instead of hardcoded value
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Super Admin',
        surname: 'Super Admin',
        email: 'superAdmin@gmail.com',
        password: hashedPassword, // Use the actual hashed password
        mobile_no: '8959881549',
        isActive: true,
        roleId: superAdminRole.id || null, // Use found role ID instead of hardcoded value
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Admin',
        surname: 'Admin',
        email: 'admin@gmail.com',
        password: hashedPassword, // Use the actual hashed password
        mobile_no: '8959881549',
        isActive: true,
        roleId: adminRole.id || null, // Use found role ID instead of hardcoded value
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User',
        surname: 'User',
        email: 'user@gmail.com',
        password: hashedPassword, // Use the actual hashed password
        mobile_no: '8959881549',
        isActive: true,
        roleId: userRole.id || null, // Use found role ID instead of hardcoded value
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    for (const userData of users) {
      const [user, created] = await User.findOrCreate({
        where: { email: userData.email },
        defaults: userData,
      });

      if (created) {
        console.log(`Created user: ${user.email}`);
        // Create associated UserInfo
        await UserInfo.findOrCreate({
          where: { userId: user.id },  // Add 'where' clause to check if UserInfo exists
          defaults: {
            address: '123 Main St',
            city: 'Default City',
            postal_code: '12345',
            continent_id: 1,
            country_id: 1,
            currency_id: 1,
            language_id: 1,
            organization_number: `ORG-${Math.floor(Math.random() * 10000)}`,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
      } else {
        console.log(`User already exists: ${user.email}`);
      }
    }
    console.log('Users seeded successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = seedUsers;
