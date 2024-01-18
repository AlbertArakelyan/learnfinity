const mongoose = require('mongoose');

require('dotenv').config();

const Role = require('../models/roles/roles.mongo');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Running User Seeder...');
  })
  .catch((error) => {
    console.log(error);
  });

const rolesSeed = [
  {
    name: 'Admin',
    description: 'Admin role',
    power: 999,
  },
  {
    name: 'Manager',
    description: 'Manager role',
    power: 77,
  },
  {
    name: 'User',
    description: 'User role',
    power: 1,
  },
];

async function seedRoles() {
  try {
    await Role.deleteMany({});
    await Role.insertMany(rolesSeed);
    console.log('Roles seeded');
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedRoles;