const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const jose = require('jose');
const bcrypt = require('bcryptjs');
const http = require('http');

// Create a server instance
const server = http.createServer(app);

// Set up Socket.io with CORS
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST"]
  }
});

// Load environment variables from .env file
require('dotenv').config();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Set mongoose to use strict query
mongoose.set('strictQuery', true);

// Connect to MongoDB using the connection string from the environment variables
mongoose.connect(process.env.MONGO_CONNECTION_STRING);

// Store active users and their socket connections in a Map
const activeUsers = new Map();

// Socket.io connection event
io.on('connection', (socket) => {
  console.log('User connected:', socket.id); // Log the user's socket ID

  // Handle user joining a room
  socket.on('join_room', (data) => {
    const { roomId, userId, userName } = data; // Extract roomId, userId, and userName from data
    socket.join(roomId); // Join the specified room
    activeUsers.set(socket.id, { userId, userName, roomId }); // Store user information in activeUsers Map
    
    // Notify other users in the room about the new user
    socket.to(roomId).emit('user_joined', {
      userId,
      userName,
      message: `${userName} has joined the room`
    });
  });

  // Handle incoming chat messages
  socket.on('send_message', (data) => {
    const { roomId, message, userName } = data; // Extract roomId, message, and userName from data
    io.to(roomId).emit('receive_message', {
      message,
      userName,
      timestamp: new Date().toISOString() // Include timestamp with the message
    });
  });

  // Handle disconnection event
  socket.on('disconnect', () => {
    const user = activeUsers.get(socket.id); // Get the user info from activeUsers Map
    if (user) {
      const { roomId, userName } = user;
      // Notify others in the room that the user has left
      socket.to(roomId).emit('user_left', {
        userName,
        message: `${userName} has left the room`
      });
      activeUsers.delete(socket.id); // Remove the user from activeUsers Map
    }
  });
});

// API endpoint for user registration
app.post('/api/register', async (req, res) => {
    try {
        // Hash the password before storing it in the database
        const newPassword = await bcrypt.hash(req.body.password, 10);
        // Determine if the user is a tutor based on the role
        const tutor = req.body.role === 'tutor' ? true : false;
        
        // Create a new user document in the database
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
            tutor: tutor,
        });
        res.json({ status: 'ok' }); // Respond with success status
    } catch (err) {
        res.json({ status: 'error', error: err }); // Respond with error status
    }
});

// API endpoint for user login
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    });
    if (!user) {
        return res.json({ status: 'error', error: 'invalid login' }); // Respond if user not found
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password); // Check password validity
    
    if (isPasswordValid) {
        // Create a JWT token for the user
        const token = await new jose.SignJWT({
            name: user.name,
            email: user.email,
        })
            .setProtectedHeader({ alg: 'HS256' }) // Set the algorithm for the JWT
            .setIssuedAt() // Set the issued date
            .sign(new TextEncoder().encode(process.env.JWTKey)); // Sign the token with the secret key

        return res.json({
            status: 'ok',
            user: token, // Return the token
            tutor: user.tutor // Return whether the user is a tutor
        });
    } else {
        return res.json({ status: 'error', user: false }); // Respond if password is invalid
    }
});

// API endpoint to save user availability
app.post('/api/saveAvailability', async (req, res) => {
    const token = req.headers['x-access-token']; // Get the token from the request header

    if (!token) {
        return res.status(401).json({ status: 'error', error: 'Token is required.' }); // Respond if no token is provided
    }

    // Verify the token
    try {
        const decoded = await jose.jwtVerify(token, new TextEncoder().encode(process.env.JWTKey)); // Decode and verify the token
        const email = decoded.payload.email; // Extract the email from the token
        const { availability } = req.body; // Get availability from the request body

        if (!availability) {
            return res.status(400).json({ status: 'error', error: 'Availability is required.' }); // Respond if availability is not provided
        }

        // Find the user by email and update their availability
        const user = await User.findOneAndUpdate(
            { email },
            { availability },
            { new: true } // Return the updated document
        );

        if (user) {
            res.json({ status: 'ok', message: 'Availability updated successfully', user }); // Respond with success message
        } else {
            res.status(404).json({ status: 'error', error: 'User not found' }); // Respond if user is not found
        }
    } catch (error) {
        res.status(401).json({ status: 'error', error: 'Invalid token' }); // Respond if token is invalid
    }
});

// API endpoint to get the list of tutors
app.get('/api/tutors', async (req, res) => {
    try {
        const tutors = await User.find({ tutor: true }, 'name availability'); // Fetch tutors with their availability
        res.json({ status: 'ok', tutors }); // Respond with the list of tutors
    } catch (error) {
        res.json({ status: 'error', error: 'Failed to fetch tutors' }); // Respond if fetching tutors fails
    }
});

// Start the server on port 1337
server.listen(1337, () => {
    console.log('Server is running on port 1337');
});