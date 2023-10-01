const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    googleId: String,
    username: String,
    picture: String,
    email: String,
    loggedInCount: {
        type: Number,
        default: 0,
    },
});

module.exports = model('User', userSchema);
