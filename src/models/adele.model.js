/*
*
* File: src/models/adele.model.js
* Description: Here is where define Adele's model class
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

const adeleSchema = new Schema({
  albumName: {
    type: String,
    required: true,
  },
  albumGenre: {
    type: String,
    required: true,
  },
  albumYear: {
    type: String,
    required: true,
  },
  albumCover: {
    type: String,
    required: true,
  },
  albumProducer: {
    type: String,
    required: true,
  },
  albumAward: [{
    type: Schema.Types.ObjectId,
    ref: 'Award',
  }],
});

const Adele = mongoose.model('Adele', adeleSchema);

module.exports = Adele;
