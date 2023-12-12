const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["admin", "gescomhome", "comptahome"],
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;