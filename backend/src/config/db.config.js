/*
*
* File: server.js
* Description: Connect my app with MongoDB
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  local: {
    localDatabaseUrl: process.env.DB_URI,
    secret: 'password',
  },
};
