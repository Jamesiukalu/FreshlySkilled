require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes'); 

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5000',
    'http://localhost:5173',
    'https://techtalize.netlify.app/',
    'http://18.234.215.162',
  ],
  credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Root Route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Test DB Route
const User = require('./models/User'); // Adjust path if necessary
app.get('/test-db', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Database query failed', error });
  }
});

app.use('/api/users', userRoutes);

// Start Server
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server is running on http://0.0.0.0:${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});