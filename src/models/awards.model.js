/*
*
* File: src/models/adele.model.js
* Description: Here is where define Artists Award's model class
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const mongoose = require('mongoose');

const album = require('./madonna.model', './adele.model');

const { Schema } = mongoose;

const awardSchema = new mongoose.Schema({
  awardCategory: {
    type: String,
    required: true,
  },
  awardYear: {
    type: Number,
    required: true,
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'album',
    required: true,
  },
});

const Award = mongoose.model('Award', awardSchema);

module.exports = Award;
