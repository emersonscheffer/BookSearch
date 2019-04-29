const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

//@route Get api/items
router.get('/', (req, res) => {
    Book.find()
        .sort({ date: -1 })
        .then(books => res.json(books))
});

//@route Get api/items
router.post('/', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        imageThumb: req.body.imageThumb,
        linkToBook: req.body.linkToBook
    });
    newBook.save().then(book => res.json(book));
});

//@route Get api/items
router.delete('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json( { success: true })))
        .catch(err => res.status(404).json( { success: false } ))
})

module.exports = router;











