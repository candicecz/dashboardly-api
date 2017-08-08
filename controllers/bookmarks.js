const express = require('express');

const onlyLoggedIn = require('../lib/only-logged-in');

module.exports = (dataLoader) => {
  const bookmarksController = express.Router();


  // Modify a bookmark              .onlyLoggedIn,
  bookmarksController.patch('/:id',  (req, res) => {
    // TODO: this is up to you to implement :)
    // TODO: make sure to verify user

      // ** MOCK DATA *******************
      const mock_user = 1;
      const mock_data = {
        title: "how to run quickly -- er -- er",
        boardId : 1,
        url:"bolt.com" // req.body ...
      } // ******************************

      // console.log('plz throw in title, boardId, and the url');
      // console.log(mock_data);

      dataLoader.bookmarkBelongsToUser(req.params.id, mock_user)
      .then(() => dataLoader.updateBookmark(req.params.id, mock_data))
      .then(data => {console.log(data);
      return res.json(data)})
      .catch(err => res.status(400).json(err));
  });



  // Delete a bookmark
  bookmarksController.delete('/:id', onlyLoggedIn, (req, res) => {
    // TODO: this is up to you to implement :)
    res.status(500).json({ error: 'not implemented' });
  });

  return bookmarksController;
};

// TEST TEST TOAST
