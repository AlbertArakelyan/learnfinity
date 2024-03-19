const Role = require('./roles.mongo');

const { rolePowers } = require('../../constants/roles');

async function getUserRole() {
  return await Role.findOne({ power: rolePowers.user });
}

module.exports = {
  getUserRole,
};
