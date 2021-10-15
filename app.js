const express = require('express');
const cookieParser = require('cookie-parser');
const noAuthRouter = require('./routes/no-auth');
const basicRouter = require('./routes/basic');
const apiKeyRouter = require('./routes/api-key');
const cookieRouter = require('./routes/cookie');
const jwtRouter = require('./routes/jwt');
const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/passport-jwt');
}

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use('/no-auth', noAuthRouter);
app.use('/basic', basicRouter);
app.use('/api-key', apiKeyRouter);
app.use('/cookie', cookieRouter);
app.use('/jwt', jwtRouter);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

module.exports = app;
