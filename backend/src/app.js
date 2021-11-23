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

const mongooseConnection = require('./config/mongooseConnection.config');
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));

app.set('mongoose connection', mongooseConnection);

app.use(index);
app.use('/api/v1', userRoutes);

module.exports = app;
