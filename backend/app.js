const express = require('express');
const connectDB = require('./config/db');

// routes
const students = require('./routes/api/students');

const app = express();

// connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello'));

// use Routes
app.use('/api/students', students);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server Running on port: ${port}`));
