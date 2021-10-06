const express = require('express');
const router = express.Router();
const passport = require('passport');
const HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy;

const apiKeys = ['194cee17-4da9-4e76-ab18-64a47cae9a6c'];

passport.use(
    new HeaderAPIKeyStrategy({ header: 'X-Api-Key' }, true, function (apiKey, cb) {
        const foundKey = apiKeys.find(el => el === apiKey);

        if (!foundKey) {
            return cb(null, false);
        }

        return cb(null, foundKey);
    })
);

router.use('/', passport.authenticate('headerapikey', { session: false }), (req, res) => {
    res.send({ result: 'API Key authentication passed' });
});

module.exports = router;