const sequelize = require('../config/connection');
const seedUser = require('./userData.js');
const seedPost = require('./postData.js');
const seedComment = require('./commentData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log('----==---=-=-=Seed User')
  await seedPost();
  console.log('----==---=-=-=Seed Post')
  await seedComment();
  console.log('----==---=-=-=Seed Comment')

  process.exit(0);
};

seedDatabase();