var express = require('express');
var router = express.Router();
var User = require('../../models/userModel');
var mongoose = require('mongoose');
router.post('/register', function (req, res) {
    console.log(req.body);
    let user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        fullname: req.body.fullname,
        age: req.body.age,
        mobile: req.body.mobile
    });
    user.save().then(data => {
        console.log(data)
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

router.post('/get_users', function (req, res) {
    User.find({}).populate("books").exec().then(data => {
        console.log(data)
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