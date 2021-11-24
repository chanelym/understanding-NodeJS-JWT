/*
*
* File: src/controllers/user.controller.js
* Description: Here is where we define Madonna's REST
* Creation: 11/23/2021
* Author: Chanely marques
*
*/

const Madonna = require('../models/madonna.model');
const Award = require('../models/awards.model');
const validations = require('../middlewares/validations');

exports.registerNewAlbum = async (req, res) => {
  validations.validateInputAlbum(req, res);

  await Madonna.create(req.body).then(() => {
    res.status(201).json({ message: 'Album Successfully Created' });
  }).catch((err) => {
    res.status(400).json({ message: 'Oops! Something went Wrong' });
    console.error(err);
  });
};

exports.updateAlbum = async (req, res) => {
  validations.validateURLID(req, res);
  validations.validateInputAlbum(req, res);

  await Madonna.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.status(201).json({ message: 'Album Successfully Updated' });
  }).catch((err) => {
    console.error(err);
    res.status(400).json({ message: 'Oops! Something went wrong' });
  });
};

exports.deleteAlbum = async (req, res) => {
  validations.validateURLID(req, res);

  await Madonna.findByIdAndDelete(req.params.id).then(() => {
    res.status(201).json({ message: 'Album Successfully Removed!' });
  }).catch((err) => {
    console.error(err);
    res.status(400).json({ message: 'Oops! Something went wrong' });
  });
};

exports.getAll = async (req, res) => {
  await Madonna.find({}).then((madonna) => {
    res.status(200).json(madonna);
  });
};

exports.getAlbumByID = async (req, res) => {
  await Madonna.findOne({ _id: req.params.id }).then((madonna) => {
    if (madonna == null) {
      res.status(404).json({ message: 'Album Not Found' });
    } else {
      res.status(200).json(madonna);
    }
  });
};
