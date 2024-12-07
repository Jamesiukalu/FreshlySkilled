const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    title: { type: String, default: ""  },
    first: { type: String, default: ""  },
    last: { type: String, default: ""  }
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  location: {
    city: { type: String, default: ""  },
    state: { type: String, default: ""  }
  },
  picture: {
    large: { type: String }
  },
  role: { type: String },
  dateOfEmployment: { type: Date },
  __v: { type: Number, default: 0 }
});

// Ensure it's mapped to the correct collection
const User = mongoose.model('User', userSchema, 'techtalize'); 

module.exports = User;
