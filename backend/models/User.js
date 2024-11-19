const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    title: { type: String, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  email: { type: String, required: true, unique: true  },
  password: { type: String, required: true },
  phone: { type: String },
  location: {
    city: { type: String },
    state: { type: String }
  },
  picture: {
    large: { type: String }
  },
  role: { type: String },
  dateOfEmployment: { type: Date },
  __v: { type: Number }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
