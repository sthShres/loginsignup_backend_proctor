const express = require('express')
const body_parser = require('body-parser');
const userRouter = require('./routes/user_routes');

const app = express();
app.use(body_parser.json());

app.use('/',userRouter);

module.exports = app;
