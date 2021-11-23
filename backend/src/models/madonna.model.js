/*
*
* File: src/models/adele.model.js
* Description: Here is where define Madonna's model class
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const mongoose = require('mongoose');

const Award = require('./awards.model');

const { Schema } = mongoose;

const DiscographySchema = new Schema({
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

export default mongoose.model('Discography', DiscographySchema);
