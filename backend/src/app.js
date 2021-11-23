/*
*
* File: app.js
* Description: Here is where this app executes and sets up everything needed
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

const database = require('./config/db.config');

mongoose.Promise = global.Promise;

mongoose.connect(database.localDatabaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Database Successfully Connected!');
}, (err) => {
  console.log(`Error Connecting Database: ${err}`);
  process.exit();
});

const index = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));

app.use(index);

module.exports = app;
