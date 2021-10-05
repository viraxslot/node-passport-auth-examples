const express = require('express');
const router = express.Router();
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

const users = [{ user: 'test', password: 'test' }];

passport.use(
    new BasicStrategy(function (username, password, cb) {
        const foundUser = users.find((el) => el.user === username && el.password === password);

        if (!foundUser) {
            return cb(null, false);
        }

        return cb(null, foundUser);
    })
);

router.use('/', passport.authenticate('basic', { session: false }), (req, res) => {
    res.send({ result: 'Basic authentication passed' });
});

module.exports = router;
