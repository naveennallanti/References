const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, require: true, unique: true},
    fullname: {type: String},
    age: {type: Number},
    mobile: {type: Number, unique: true},
    books: [{type: Schema.Types.ObjectId, ref: 'books'}]
});

module.exports = mongoose.model('users', userSchema);