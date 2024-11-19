const express = require('express');
const User = require('../models/User'); // Adjust the path if necessary
const router = express.Router();

// POST route to register a user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ error: 'User with this email already exists' }); // 409 Conflict
    }

    // Create a new user
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).send({ message: 'User created successfully', user });
  } catch (err) {
    res.status(400).send({ error: 'Failed to create user', details: err.message });
  }
});

// POST route for login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    // Check password (basic comparison for now; hash it in production)
    if (user.password !== password) {
      return res.status(400).send({ error: 'Invalid credentials' });
    }

    res.status(200).send({ message: 'Login successful', user });
    
  } catch (err) {
    res.status(500).send({ error: 'Login failed', details: err.message });
  }
});

// router.put('/update', async (req, res) => {
//   try {
//     const { userId } = req.user; // Assuming you have user authentication middleware
//     const updatedProfile = req.body; // The updated profile data from the request

//     // Update user in the database
//     const updatedUser = await User.findByIdAndUpdate(userId, updatedProfile, { new: true });

//     // Respond with the updated user data
//     res.json({ message: 'Profile updated successfully', user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating profile', error: error.message });
//   }
// });
// PUT route to update user profile
// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from the Authorization header

  if (!token) {
    return res.status(403).send({ error: 'Access Denied: No token provided' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: 'Invalid or expired token' });
    }
    req.user = decoded; // Attach the decoded payload (e.g., { userId }) to the request
    next();
  });
};

// PUT route to update user profile
router.put('/update', authenticateToken, async (req, res) => {
  try {
    // Extract userId from the decoded token
    const userId = req.user.userId;

    // The updated profile data from the request
    const updatedProfile = req.body;

    // Validate input data (optional but recommended)
    if (!updatedProfile || Object.keys(updatedProfile).length === 0) {
      return res.status(400).json({ message: 'No data provided for update' });
    }

    // Update user in the database
    const updatedUser = await User.findByIdAndUpdate(userId, updatedProfile, { new: true, runValidators: true });

    // Check if the user exists
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with the updated user data
    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
});



module.exports = router;
