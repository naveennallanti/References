var express = require('express');
var router = express.Router();
var Book = require('../../models/booksModel');
var mongoose = require('mongoose');
router.post('/create_book', function (req, res) {
    console.log(req.body);
    let book = new Book({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        cdate: Date.now(),
        userId: req.body.userId
    });
    book.save().then(data => {
        console.log(data);
        res.json({
            status: "OK",
            msg: data
        })
    }).catch(err => {
        res.json({
            status: "failure",
            msg: err
        })
    })
});

router.post('/get_book', function (req, res) {
    console.log(req.body);
    let book_id = req.body._id;
    // let userId = req.body.userId;
    // console.log("ch1", book_id, userId)
    Book.find({}).populate("userId").exec().then(data => {
        res.json({
            status: "OK",
            msg: data
        })
    }).catch(err => {
        res.json({
            status: "failure",
            msg: err
        })
    })
});

router.post('/get_book', function (req, res) {
    console.log(req.body);
    let book_id = req.body._id;
    // let userId = req.body.userId;
    // console.log("ch1", book_id, userId)
    Book.find({"_id": book_id}).populate("userId").exec().then(data => {
        res.json({
            status: "OK",
            msg: data
        })
    }).catch(err => {
        res.json({
            status: "failure",
            msg: err
        })
    })
});

module.exports = router;