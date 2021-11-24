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

exports.registerNewAlbum = (req, res) => {
  const newAlbum = new Adele();

  newAlbum.albumName = req.body.albumName;
  newAlbum.albumGenre = req.body.albumGenre;
  newAlbum.albumYear = req.body.albumYear;
  newAlbum.albumCover = req.body.albumCover;
  newAlbum.albumProducer = req.body.albumProducer;

  newAlbum.save((err) => {
    if (err) {
      res.status(400).send('err tryng saving Album Info');
    }

    res.status(200).send('Album successfully saved');
  });
};

exports.updateAlbum = (req, res) => {
  Adele.findById(req.params.id, (err, album) => {
    if (err) {
      res.status(400).send('err try to find this Album');
    }

    album.albumName = req.body.albumName;
    album.albumGenre = req.body.albumGenre;
    album.albumYear = req.body.albumYear;
    album.albumCover = req.body.albumCover;
    album.albumProducer = req.body.albumProducer;

    album.save((err) => {
      if (err) {
        res.status(400).send('err try to save this Album');
      }

      res.status(200).json({ message: 'Album succefully updated.' });
    });
  });
};

exports.deleteAlbum = (req, res) => {
  Adele.deleteOne({ _id: req.params.id }, (err, album) => {
    if (err) {
      res.status(400).send('err try to remove this Album');
    }

    res.status(200).json({ message: 'Album successfully removed' });
  });
};

exports.getAll = (req, res) => {
  Adele.find({}, (err, album) => {
    if (err) {
      res.status(400).send('err try to find Adele Albumns');
    }

    res.status(200).json(album);
  });
};

exports.getAlbumByID = (req, res) => {
  Adele.findById(req.params.id, (err, album) => {
    if (err) {
      res.status(400).send('err try to find this Album');
    }

    res.status(200).json(album);
  });
};
