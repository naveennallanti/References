var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/practice', {useNewUrlParser: true}, function (err, data) {
    if (!err) {
        console.log("connected to database");
    }
});

var apis = require('./routes/apis');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', apis);

app.listen(port, () => {
    console.log('server started on ' + port);
});
