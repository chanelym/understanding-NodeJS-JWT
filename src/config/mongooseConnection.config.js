/*
*
* File: src/config/mongooseConnection.config
* Description: Here is where we connect to Mongo
* Creation: 11/23/2021
* Author: Chanely marques
*
*/

const mongoose = require('mongoose');

const database = require('./db.config');

mongoose.Promise = global.Promise;

mongoose.connect(database.local.localUrlDatabase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database Successfully Connected!');
}, (err) => {
  console.log(`Error Connecting Database: ${err}`);
  process.exit();
});
