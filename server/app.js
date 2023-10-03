const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
require('dotenv').config();
const authRoutes = require('./routes/user');

require('./middlewares/passport');

const app = express();
const origin = 'http://localhost:5173';
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    cors({
        origin: '*',
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
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/auth', authRoutes);
mongoose
    .connect(process.env.MONGO_URI)
    .then((result) => {
        console.log('mongodb connnected');
    })
    .catch((err) => console.log(err.message));
const PORT = process.env.PORT || 3000;

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () =>
    console.log('server is running on http://localhost:' + PORT)
);
