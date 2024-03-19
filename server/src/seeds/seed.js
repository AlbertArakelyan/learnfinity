const mongoose = require('mongoose');

const seedRoles = require('./roles.seed');
const seedUsers = require('./users.seed');

Promise.all([
  seedRoles(),
  seedUsers(),
]).then(() => {
  mongoose.connection.close();
});