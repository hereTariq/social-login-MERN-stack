const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/user');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            let user = await User.findOne({ googleId: profile.id });
            if (!user) {
                user = await User.create({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    username: profile.name.familyName,
                    email: profile.emails[0].value,
                    picture: profile.photos[0].value,
                });
            }

            done(null, user);
        }
    )
);

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK_URL,
        },
        async function (accessToken, refreshToken, profile, done) {
            let user = await User.findOne({ githubId: profile.id });
            if (!user) {
                user = await User.create({
                    githubId: profile.id,
                    username: profile.username,
                    displayName: profile.displayName,
                    email: profile?.emails[0].value || '',
                    picture: profile.photos[0].value,
                });
            }

            done(null, user);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
module.exports = passport;
