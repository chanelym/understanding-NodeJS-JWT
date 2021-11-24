/*
*
* File: src/routes/madonna.routes.js
* Description: This file is responsible to configure Madonnas REST
* Creation: 11/23/2021
* Author: Chanely marques
*
*/

const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const madonnaController = require('../controllers/madonna.controllers');

// Create a new album (POST): http://localhost:3000/api/v1/madonna/add 
router.post('/add', auth, madonnaController.registerNewAlbum);

// Edit Album (PUT): http://localhost:3000/api/v1/madonna/update
router.post('/update', auth, madonnaController.updateAlbum);

// Delete Album (DELETE): http://localhost:3000/api/v1/madonna/delete
router.get('/delete', auth, madonnaController.deleteAlbum);

// GET Everything (GET): http://localhost:3000/api/v1/madonna/delete
router.get('/listall', auth, madonnaController.getAll);

// GET Album by ID (DELETE): http://localhost:3000/api/v1/madonna/delete
router.get('/listid', auth, madonnaController.getAlbumByID);

module.exports = router;
