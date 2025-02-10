
// const { getEmojiFlag } = require('countries-list');
// const { continents, countries } = require('countries-list'); 
// const { sequelize } = require('../../config/database');
// const Continent = require('../models/continentsModel');
// const Country = require('../models/countriesModel');
// const Currency = require('../models/currencyModel');
// const Language = require('../models/languagesModel');
// const iso6391 = require('iso-639-1'); 
// const currencyCodes = require('currency-codes'); 
// const seedRoles = require('./role-seeder');
// const seedUsers = require('./user-seeder'); 


// (async () => {
//   try {
//     // await sequelize.authenticate();
//     console.log('Database connection successful!');

//     // await sequelize.sync({ force: true }); 
//     console.log('Database synchronized!');

//    await seedRoles();
//    await seedUsers();
//     // Insert continents
//     const continentMap = {};
//     for (const [code, name] of Object.entries(continents)) {
//       const continent = await Continent.create({ code, name });
//       continentMap[code] = continent.id;
//     }

//     // Insert languages
//     const languageSet = new Set();
//     for (const data of Object.values(countries)) {
//       if (data.languages) {
//         for (const lang of data.languages) {
//           if (!languageSet.has(lang)) {
//             const languageName = iso6391.getName(lang)
// ; 

//             await Language.create({
//               code: lang,
//               name: languageName || lang, 
//             });
//             languageSet.add(lang)
// ;
//           }
//         }
//       }
//     }

//     console.log('Language data inserted successfully!');

//     // Insert currencies
//     const currencySet = new Set();
//     for (const data of Object.values(countries)) {
//       if (data.currency) {
//         const currencies = Array.isArray(data.currency) ? data.currency : [data.currency];
//         for (const currencyCode of currencies) {
//           if (!currencySet.has(currencyCode)) {
//             const currency = currencyCodes.code(currencyCode);
//             const currencyName = currency ? currency.currency : currencyCode;

//             await Currency.create({
//               currencycode: currencyCode,
//               name: currencyName,
//             });

//             currencySet.add(currencyCode);
//           }
//         }
//       }
//     }

//     console.log('Currency data inserted successfully!');

//     // Insert countries
//     for (const [code, data] of Object.entries(countries)) {
//         const flag = getEmojiFlag(code);
      
//         try {
//           await Country.create({
//             code: code,
//             name: data.name,
//             emoji: flag,
//             continentId: continentMap[data.continent],
//           });
//           console.log(`Country ${data.name} inserted successfully.`);
//         } catch (error) {
//           console.error(`Error inserting country ${data.name}:`, error);
//         }
//       }   
 
//     console.log('Seeding completed successfully!');
//   } catch (error) {
//     console.error('Error during seeding:', error);
//   } finally {
//     // await sequelize.close();
//   }
// })();

const { getEmojiFlag } = require('countries-list');
const { continents, countries } = require('countries-list');
const { sequelize } = require('../../config/database');
const Continent = require('../models/continentsModel');
const Country = require('../models/countriesModel');
const Currency = require('../models/currencyModel');
const Language = require('../models/languagesModel');
const iso6391 = require('iso-639-1');
const currencyCodes = require('currency-codes');
const seedRoles = require('./role-seeder');
const seedUsers = require('./user-seeder');

(async () => {
  try {
    console.log('Database connection successful!');

    console.log('Database synchronized!');

    await seedRoles();
    await seedUsers();

    // Insert continents
    const continentMap = {};
    for (const [code, name] of Object.entries(continents)) {
      const continent = await Continent.create({ code, name });
      continentMap[code] = continent.id;
    }

    // Insert languages with duplicate check
    const languageSet = new Set();
    for (const data of Object.values(countries)) {
      if (data.languages) {
        for (const lang of data.languages) {
          if (!languageSet.has(lang)) {
            const languageName = iso6391.getName(lang);

            await Language.findOrCreate({
              where: { code: lang },
              defaults: { name: languageName || lang },
            });

            languageSet.add(lang);
          }
        }
      }
    }

    console.log('Language data inserted successfully!');

    // Insert currencies with duplicate check
    const currencySet = new Set();
    for (const data of Object.values(countries)) {
      if (data.currency) {
        const currencies = Array.isArray(data.currency) ? data.currency : [data.currency];
        for (const currencyCode of currencies) {
          if (!currencySet.has(currencyCode)) {
            const currency = currencyCodes.code(currencyCode);
            const currencyName = currency ? currency.currency : currencyCode;

            await Currency.findOrCreate({
              where: { currencycode: currencyCode },
              defaults: { name: currencyName },
            });

            currencySet.add(currencyCode);
          }
        }
      }
    }

    console.log('Currency data inserted successfully!');

    // Insert countries
    for (const [code, data] of Object.entries(countries)) {
      const flag = getEmojiFlag(code);

      try {
        await Country.findOrCreate({
          where: { code },
          defaults: {
            name: data.name,
            emoji: flag,
            continentId: continentMap[data.continent],
          },
        });
        console.log(`Country ${data.name} inserted successfully.`);
      } catch (error) {
        console.error(`Error inserting country ${data.name}:`, error);
      }
    }

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  }
})();
