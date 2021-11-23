/*
*
* File: src/routes/user.routes.js
* Description: This file is responsible to configure User Authentication's Route
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.controllers');

// Create a new user (POST): http://localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);

// User Login (POST): http://localhost:3000/api/v1/login
router.post('/login', userController.loginUser);

// User Profile Info (GET): http://localhost:3000/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile);

module.exports = router;
