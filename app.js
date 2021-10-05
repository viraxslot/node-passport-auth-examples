const express = require('express');
const noAuthRouter = require('./routes/no-auth');
const basicRouter = require('./routes/basic');

const app = express();
app.use('/no-auth', noAuthRouter);
app.use('/basic', basicRouter);

module.exports = app;
