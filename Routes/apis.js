var express = require('express');
var router = express.Router();
var users = require('./users/users.js');
var books = require('./books/books');


router.use('/users', users);
router.use('/books', books);
// router.use('/comments', comments);

module.exports = router;