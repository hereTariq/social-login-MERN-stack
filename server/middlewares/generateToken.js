const jwt = require('jsonwebtoken');

module.exports = (user) => {
    const payload = { userId: user._id, email: user.email };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
};
