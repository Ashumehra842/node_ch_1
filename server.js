const express = require('express');
const app = express();

const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const route = require('./src/route/demo.js');

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log('database connected successfully.!'));

app.use(express.json());

app.use('/', route);
app.use('/controller', route);

app.use('/insert', route);

app.use('/getUser', route);
app.use('/delete', route);
const port = 8000;
app.listen(process.env.PORT, () => {
  console.log('Connection Stablish Successfully.!');
});
