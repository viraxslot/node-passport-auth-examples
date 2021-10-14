const express = require('express');
const cookieParser = require('cookie-parser');
const noAuthRouter = require('./routes/no-auth');
const basicRouter = require('./routes/basic');
const apiKeyRouter = require('./routes/api-key');
const cookieRouter = require('./routes/cookie');

const app = express();
app.use(cookieParser())
app.use(express.json())

app.use('/no-auth', noAuthRouter);
app.use('/basic', basicRouter);
app.use('/api-key', apiKeyRouter);
app.use('/cookie', cookieRouter);

module.exports = app;
