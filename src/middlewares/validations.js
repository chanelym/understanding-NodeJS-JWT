exports.validateInputAlbum = (req, res) => {
  if (!req.body.albumName
    || !req.body.albumYear
    || !req.body.albumCover
    || !req.body.albumProducer
    || !req.body.albumGenre) {
    res.status(403).json({ message: 'One or more fields is missing.' });
  }
  return true;
};

exports.validateURLID = (req, res) => {
  const id = req.params.id;

  if (id.length !== 24) {
    res.status(403).json({ message: 'ID URL needs 24 characters' });
  }
  return true;
};
