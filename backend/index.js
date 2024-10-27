const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const jose = require('jose');
const bcrypt = require('bcryptjs');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

require('dotenv').config();
app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING);

// Store active users and their socket connections
const activeUsers = new Map();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle user joining a room
  socket.on('join_room', (data) => {
    const { roomId, userId, userName } = data;
    socket.join(roomId);
    activeUsers.set(socket.id, { userId, userName, roomId });
    
    // Notify others in the room
    socket.to(roomId).emit('user_joined', {
      userId,
      userName,
      message: `${userName} has joined the room`
    });
  });

  // Handle chat messages
  socket.on('send_message', (data) => {
    const { roomId, message, userName } = data;
    io.to(roomId).emit('receive_message', {
      message,
      userName,
      timestamp: new Date().toISOString()
    });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    const user = activeUsers.get(socket.id);
    if (user) {
      const { roomId, userName } = user;
      socket.to(roomId).emit('user_left', {
        userName,
        message: `${userName} has left the room`
      });
      activeUsers.delete(socket.id);
    }
  });
});

// Your existing routes
app.post('/api/register', async (req, res) => {
    try{
        const newPassword = await bcrypt.hash(req.body.password, 10)
        const tutor = req.body.role === 'tutor' ? true : false
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
            tutor: tutor,
        })
        res.json({status: 'ok'})
    }
    catch(err){
        res.json({status: 'error', error: err})
    }
});

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })
    if(!user){
        return res.json({status: 'error', error: 'invalid login'})
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
    console.log("User password in DB: ", user.password);
    console.log("Entered password: ", req.body.password);
    if(isPasswordValid){
        const token = await new jose.SignJWT({
            name: user.name,
            email: user.email,
        })
            .setProtectedHeader({alg: 'HS256'})
            .setIssuedAt()
            .sign(new TextEncoder().encode(process.env.JWTKey))
        return res.json({status: 'ok', user: token})
    }
    else{
        return res.json({status: 'error', user: false})
    }
});

app.post('/api/saveAvailability', async (req, res) => {
    const { email, availability } = req.body;

  if (!email || !availability) {
    return res.status(400).json({ status: 'error', error: 'Email and availability are required.' });
  }

  try {
    // Find the user by email and update the availability
    const user = await User.findOneAndUpdate(
      { email },
      { availability },
      { new: true } // Returns the updated document
    );

    if (user) {
      res.json({ status: 'ok', message: 'Availability updated successfully', user });
    } else {
      res.status(404).json({ status: 'error', error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Failed to update availability' });
  }
  });

// Use server.listen instead of app.listen
server.listen(1337, () => {
    console.log('Server is running on port 1337');
});