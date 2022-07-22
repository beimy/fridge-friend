const faker = require('faker');

const db = require('../config/connection');
<<<<<<< Updated upstream
const { User } = require('../models');

db.once('open', async () => {
  
=======
const { Recipe, User } = require('../models');

db.once('open', async () => {
  await Recipe.deleteMany({});
>>>>>>> Stashed changes
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  console.log('all done!');
  process.exit(0);
});
