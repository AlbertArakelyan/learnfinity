const mongoose = require('mongoose');

const seedRoles = require('./roles.seed');

Promise.all([
  seedRoles(),
]).then(() => {
  mongoose.connection.close();
});