/*
*
* File: src/routes/index.js
* Description: This file lists all my API routes
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const express = require('express');

const router = express.Router();

router.get('/api/v1', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Welcome to my humble Home!',
    version: '1.0.0',
  });
});

module.exports = router;
