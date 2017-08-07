const express = require('express');

const onlyLoggedIn = require('../lib/only-logged-in');

module.exports = (dataLoader) => {
  const bookmarksController = express.Router();

  // Modify a bookmark // GIT BRANCH TEST
  bookmarksController.patch('/:id', onlyLoggedIn, (req, res) => {
    // TODO: this is up to you to implement :)
    res.status(500).json({ error: 'not implemented' });
  });

// TEST TEST TEST TEST
///////hiiiiiiiii
// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING


// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING


// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING


// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING
// TESTING TESTING TESTING

  // Delete a bookmark
  bookmarksController.delete('/:id', onlyLoggedIn, (req, res) => {
    // TODO: this is up to you to implement :)
    res.status(500).json({ error: 'not implemented' });
  });

  return bookmarksController;
};


//test from hyoojyn