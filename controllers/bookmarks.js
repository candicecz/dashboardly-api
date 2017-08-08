const express = require('express');

const onlyLoggedIn = require('../lib/only-logged-in');

module.exports = (dataLoader) => {
  const bookmarksController = express.Router();

  // Modify a bookmark // GIT BRANCH TEST
  bookmarksController.patch('/:id', onlyLoggedIn, (req, res) => {
    // TODO: this is up to you to implement :)
    return dataLoader.getAllBookmarksForBoard(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: 'not implemented' }));
  });

  // Delete a bookmark
  bookmarksController.delete('/:id', onlyLoggedIn, (req, res) => {
    // TODO: this is up to you to implement :)
    res.status(500).json({ error: 'not implemented' });
  });

  return bookmarksController;
};

// TEST TEST TOAST
