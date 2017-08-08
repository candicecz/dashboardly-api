const express = require('express');

const onlyLoggedIn = require('../lib/only-logged-in');

module.exports = (dataLoader) => {
  const bookmarksController = express.Router();


  // Modify a bookmark //          .onlyLoggedIn,
  bookmarksController.patch('/:id', (req, res) => {
    // TODO: this is up to you to implement :)
    // console.log(onlyLoggedIn);
    return dataLoader.boardBelongsToUser(req.params.id, req.user.id)
    .then(() => dataLoader.updateBookmark(1, {boardId:3, title:'Gee Biz', URL:'react.oil'}))
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: 'not implemented' }));
    // TODO: make sure to verify user
  });



  // Delete a bookmark
  bookmarksController.delete('/:id', onlyLoggedIn, (req, res) => {
    // TODO: this is up to you to implement :)
    res.status(500).json({ error: 'not implemented' });
  });

  return bookmarksController;
};

// TEST TEST TOAST
