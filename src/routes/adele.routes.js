/*
*
* File: src/routes/adele.routes.js
* Description: This file is responsible to configure Artists Awards
* Creation: 11/23/2021
* Author: Chanely marques
*
*/

const express = require('express');

const router = express.Router();
const adeleController = require('../controllers/adele.controllers');

// Create a new album (POST): http://localhost:3000/api/v1/adele/add 
router.post('/add', adeleController.registerNewAlbum);

// Edit Album (PUT): http://localhost:3000/api/v1/adele/update
router.post('/update', adeleController.updateAlbum);

// Delete Album (DELETE): http://localhost:3000/api/v1/adele/delete
router.get('/delete', adeleController.deleteAlbum);

// GET Everything (GET): http://localhost:3000/api/v1/adele/delete
router.get('/listall', adeleController.getAll);

// GET Album by ID (DELETE): http://localhost:3000/api/v1/adele/delete
router.get('/listid', adeleController.getAlbumByID);

module.exports = router;
