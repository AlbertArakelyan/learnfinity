const mongoose = require('mongoose');

const seedRoles = require('./roles.seed');

seedRoles().then(() => {
  mongoose.connection.close();
});