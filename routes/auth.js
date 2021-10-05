// const _ = require('lodash');
// const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

// const passport = require('passport');
// const passportJWT = require('passport-jwt');

// const ExtractJwt = passportJWT.ExtractJwt;
// const JwtStrategy = passportJWT.Strategy;

// let users = [
//     {
//         id: 1,
//         name: 'javier',
//         password: 'password123',
//     },
// ];

// let jwtOptions = {};
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// jwtOptions.secretOrKey = 'mysecretword';

// let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
//     console.log('payload received', jwt_payload);
//     // usually this would be a database call:
//     let user = users[_.findIndex(users, { id: jwt_payload.id })];
//     if (user) {
//         next(null, user);
//     } else {
//         next(null, false);
//     }
// });

// passport.use(strategy);

// let app = express();
// app.use(passport.initialize());

// // parse application/x-www-form-urlencoded
// // for easier testing with Postman or plain HTML forms
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     })
// );

// // parse application/json
// app.use(bodyParser.json());

// router.get('/', function (req, res) {
//     res.json({ message: 'The app is running!' });
// });

// router.post('/login', function (req, res) {
//     if (req.body.name && req.body.password) {
//         let name = req.body.name;
//         let password = req.body.password;
//     }
//     // usually this would be a database call:
//     let user = users[_.findIndex(users, { name: name })];
//     if (!user) {
//         res.status(401).json({ message: 'no such user found' });
//     }

//     if (user.password === req.body.password) {
//         // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
//         let payload = { id: user.id };
//         let token = jwt.sign(payload, jwtOptions.secretOrKey);
//         res.json({ message: 'ok', token: token });
//     } else {
//         res.status(401).json({ message: 'invalid credentials' });
//     }
// });

// router.get('/secret', passport.authenticate('jwt', { session: false }), function (req, res) {
//     res.json({ message: 'Success!' });
// });

// router.get(
//     '/secretDebug',
//     function (req, res, next) {
//         console.log(req.get('Authorization'));
//         next();
//     },
//     function (req, res) {
//         res.json('debugging');
//     }
// );

// module.exports = router;
