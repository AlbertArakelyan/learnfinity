const mongoose = require('mongoose');

require('dotenv').config();

const User = require('../models/users/users.mongo');

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

const usersSeed = [
  {
    "fullName" : "Albert Arakelyan",
    "email" : "albert111@yopmail.com",
    "password" : "$2a$10$AGTPisIoQTYYcVkS98X4o.UmHlgnkxkYSttJ8O2o/QqNx11m5N4ue", // 12345678
    "isEmailVerified" : true,
  },
  {
    "fullName" : "Hasmik Mejlumyan",
    "email" : "hasmik111@yopmail.com",
    "password" : "$2a$10$AGTPisIoQTYYcVkS98X4o.UmHlgnkxkYSttJ8O2o/QqNx11m5N4ue", // 12345678
    "isEmailVerified" : true,
  },
  {
    "fullName" : "Anush Hayrapetyan",
    "email" : "anush111@yopmail.com",
    "password" : "$2a$10$AGTPisIoQTYYcVkS98X4o.UmHlgnkxkYSttJ8O2o/QqNx11m5N4ue", // 12345678
    "isEmailVerified" : true,
  },
  {
    "fullName" : "Simon Karapetyan",
    "email" : "simon111@yopmail.com",
    "password" : "$2a$10$AGTPisIoQTYYcVkS98X4o.UmHlgnkxkYSttJ8O2o/QqNx11m5N4ue", // 12345678
    "isEmailVerified" : true,
  },
];

async function seedUsers() {
  try {
    await User.deleteMany({});
    await User.insertMany(usersSeed);
    console.log('Users seeded');
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedUsers;