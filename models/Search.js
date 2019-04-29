const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const SearchSchema = new Schema({
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


module.exports = Search = mongoose.model('search', SearchSchema);