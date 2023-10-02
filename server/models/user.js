const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    githubId: String,
    facebookId: String,
    googleId: String,
    username: String,
    displayName: String,
    picture: String,
    email: String,
});

module.exports = model('User', userSchema);
