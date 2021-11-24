/*
*
* File: src/controllers/adele.controller.js
* Description: Here is where we define Adele's REST
* Creation: 11/23/2021
* Author: Chanely marques
*
*/

const Adele = require('../models/adele.model');
const Award = require('../models/awards.model');
// const validations = require('../middlewares/validations');

exports.registerNewAlbum = async (req, res) => {
  // validations.validateInputAlbum(req, res);

  await Adele.create(req.body).then(() => {
    res.status(201).json({ message: 'Album Successfully Created' });
  }).catch((err) => {
    res.status(400).json({ message: 'Oops! Something went Wrong' });
    console.error(err);
  });
};

exports.updateAlbum = async (req, res) => {
  // validations.validateURLID(req, res);
  // validations.validateInputAlbum(req, res);

  await Adele.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.status(201).json({ message: 'Album Successfully Updated' });
  }).catch((err) => {
    console.error(err);
    res.status(400).json({ message: 'Oops! Something went wrong' });
  });
};

exports.deleteAlbum = async (req, res) => {
  // validations.validateURLID(req, res);

  await Adele.findByIdAndDelete(req.params.id).then(() => {
    res.status(201).json({ message: 'Album Successfully Removed!' });
  }).catch((err) => {
    console.error(err);
    res.status(400).json({ message: 'Oops! Something went wrong' });
  });
};

exports.getAll = async (req, res) => {
  await Adele.find({}).then((adele) => {
    res.status(200).json(adele);
  });
};

exports.getAlbumByID = async (req, res) => {
  await Adele.findOne({ _id: req.params.id }).then((adele) => {
    if (adele == null) {
      res.status(404).json({ message: 'Album Not Found' });
    } else {
      res.status(200).json(adele);
    }
  });
};
