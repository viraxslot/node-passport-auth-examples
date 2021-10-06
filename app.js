const express = require('express');
const noAuthRouter = require('./routes/no-auth');
const basicRouter = require('./routes/basic');
const apiKeyRouter = require('./routes/api-key');

const app = express();
app.use('/no-auth', noAuthRouter);
app.use('/basic', basicRouter);
app.use('/api-key', apiKeyRouter);

module.exports = app;
