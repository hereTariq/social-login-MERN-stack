const router = require('express').Router();
const passport = require('passport');

router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: process.env.LOGIN_FAILURE_URL,
        successRedirect: process.env.LOGIN_SUCCESS_URL,
    })
);

router.get(
    '/github',
    passport.authenticate('github', { scope: ['user:email'] })
);
router.get(
    '/github/callback',
    passport.authenticate('github', {
        failureRedirect: process.env.LOGIN_FAILURE_URL,
        successRedirect: process.env.LOGIN_SUCCESS_URL,
    })
);
router.get('/facebook', passport.authenticate('facebook'));
router.get(
    '/facebook/callback',
    passport.authenticate('facebook', {
        failureRedirect: process.env.LOGIN_SUCCESS_URL,
        successRedirect: process.env.LOGIN_FAILURE_URL,
    })
);

router.get('/login/success', (req, res, next) => {
    if (req.user) {
        return res.status(200).json({ user: req.user, seccess: true });
    }
    res.status(401).json({ message: 'Unauthorized', success: false });
});
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect(process.env.LOGIN_FAILURE_URL);
});

module.exports = router;
