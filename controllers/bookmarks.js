const express = require('express');

const onlyLoggedIn = require('../lib/only-logged-in');

module.exports = (dataLoader) => {
  const bookmarksController = express.Router();


  // Modify a bookmark             .onlyLoggedIn,
  bookmarksController.patch('/:id', (req, res) => {

    // req.params.id ==== id of the bookmark
    // req.body.title
    // req.body.boardId
    // req.body.url

    // TODO: this is up to you to implement :)

    // .then(data => res.json(data))
    // .catch(err => res.status(500).json({ error: 'not implemented' }));
    // TODO: make sure to verify user
    // dataLoader.bookmarkBelongsToUser(req.params.id, req.user.id)
    // .then(() => {

      const new_data = {
        title: req.body.title,
        boardId : req.body.boardId,
        url: req.body.url
      }

      const mock_data = {
        title: "how to run quickly",
        boardId : 1,
        url:"bolt.com"
      }

      console.log('plz throw in title, boardId, and the url');
      console.log(mock_data);

      return dataLoader.bookmarkBelongsToUser(req.params.id, req.user.id)
      .then(dataLoader.updateBookmark(req.params.id, mock_data))
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
