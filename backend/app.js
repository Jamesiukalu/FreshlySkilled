require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


const app = express();
// Middleware
app.use(express.json());

// Configure CORS
app.use(cors({
    origin: 'http://localhost:5173', // Use only the domain and port of the frontend
    credentials: true,             // Allow credentials (cookies/sessions)
}));

// Handle preflight requests globally
app.options('*', cors());

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect:', err));

// Routes
app.use('/api/users', userRoutes);

// Sample route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
