const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  power: {
    type: Number,
    required: true,
    enum: [1, 77, 999],
  },
});

module.exports = mongoose.model('Role', rolesSchema);