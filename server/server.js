/** @format */

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv-extended').load();

const app = express();

//Connect to DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false })); //used to get the body from the req

app.get('/', (req, res) => res.send('API Running...'));

const corsOptions = {
  origin(origin, callback) {
    if (origin === 'http://localhost:5000/') {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS for origin: ${origin}`));
    }
  }
};

//Define Routes
app.use('/api/users', cors(corsOptions), require('./routes/api/users'));
app.use('/api/auth', cors(corsOptions), require('./routes/api/auth'));
app.use('/api/trainingtypes', cors(corsOptions), require('./routes/api/trainigType'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`<=== Server started on PORT: ${PORT} ===>`));
