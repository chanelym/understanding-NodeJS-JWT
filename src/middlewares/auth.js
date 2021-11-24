/*
*
* File: src/middlewares/auth.js
* Description: This file is reponsible to confirm is User has access to API using Token
* Creation: 11/23/2021
* Author: Chanely marques
*
*/

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    console.log(token);

    // Decodificating Token and Confirm if User can Access System
    const decoded = jwt.verify(token, 'secret');
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Falha na Autenticação!' });
  }
};
