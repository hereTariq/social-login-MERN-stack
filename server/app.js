const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const authRoutes = require('./routes/user');

require('./middlewares/passport');

const app = express();
const origin = 'http://localhost:5173';
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    cors({
        origin,
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,
    })
);
app.use(
    cookieSession({
        name: 'name',
        maxAge: 24 * 60 * 60 * 1000,
        keys: ['keys'],
        httpOnly: true,
    })
);
// app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
mongoose
    .connect(process.env.MONGO_URI)
    .then((result) => {
        console.log('mongodb connnected');
    })
    .catch((err) => console.log(err.message));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log('server is running on http://localhost:' + PORT)
);
