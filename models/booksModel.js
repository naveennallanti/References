const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true, unique: true},
    cdate: {type: Date},
    userId: [{type: Schema.Types.ObjectId, ref: 'users'}]
});

module.exports = mongoose.model('books', bookSchema);