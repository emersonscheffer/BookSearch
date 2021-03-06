const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    imageThumb: {
        type: String,
        required: false
    },
    linkToBook: {
        type: String,
        required: false
    }
    
});


module.exports = Book = mongoose.model('book', BookSchema);