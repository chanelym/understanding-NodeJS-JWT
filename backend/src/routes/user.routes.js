/*
*
* File: src/routes/user.routes.js
* Description: Here is where User's route is configured
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.controllers');

router.post('/register', userController.registerNewUser);

router.post('/login', userController.loginUser);

router.get('/userProfile', userController.returnUserProfile);

module.exports = router;
