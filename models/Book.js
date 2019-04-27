const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    }
    
});


module.exports = Book = mongoose.model('book', BookSchema);