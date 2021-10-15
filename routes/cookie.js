const express = require('express');
const router = express.Router();
const passport = require('passport');
var uuid = require('uuid');
const CookieStrategy = require('passport-cookie');

let id = 0;
let data = [];

passport.use(
    new CookieStrategy({ cookieName: 'session', signed: false, passReqToCallback: true }, function (req, cookie, cb) {
        const foundUser = data.find((el) => el.token === cookie);

        if (!foundUser) {
            return cb(null, false);
        }

        return cb(null, foundUser);
    })
);

router.post('/signup', (req, res) => {
    const body = req.body;

    if (!body.username || !body.password) {
        return res.status(400).send({ result: 'Fields username and password should be filled' });
    }

    const foundUser = data.find((el) => el.user === body.username);
    if (foundUser) {
        return res.send({ result: 'User already exists' });
    }

    data.push({
        id,
        user: body.username,
        password: body.password,
        name: body.name,
        surname: body.surname,
        token: null,
    });

    id++;
    return res.send({ result: 'User added!' });
});

router.get('/get-users', (req, res) => {
    res.send({
        result: data.map((el) => {
            return { id: el.id, username: el.user };
        }),
    });
});

router.get('/profile', passport.authenticate('cookie', { session: false }), (req, res) => {
    const foundUser = data.find((el) => el.token === req.cookies.session);

    if (foundUser) {
        return res.send({
            result: {
                name: foundUser?.name ?? null,
                surname: foundUser?.surname ?? null,
            },
        });
    }

    return res.send({ result: 'User profile not found' });
});

router.post('/login', (req, res) => {
    const body = req.body;

    if (!body.username || !body.password) {
        return res.status(400).send({ result: 'Fields username and password should be filled' });
    }

    const foundUser = data.find((el) => el.user === body.username && el.password === body.password);

    if (foundUser) {
        foundUser.token = uuid.v4();
        res.cookie('session', foundUser.token);
        return res.send({ result: 'Successfull login!' });
    }

    return res.send({ result: 'Wrong user or password' });
});

module.exports = router;
