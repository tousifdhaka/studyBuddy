const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jose = require('jose');

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING)

app.listen(1337, () => {
    console.log('Server is running on port 1337');
});