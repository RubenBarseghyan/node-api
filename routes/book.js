const express = require('express');

const router = express.Router();

const book = require('../controllers/book');

router.get('/', book.getAllBook);
router.get('/:id', book.getCurrentBook);
router.post('/', book.addBook);
router.delete('/:id', book.deleteBook);
router.patch('/:id', book.updateBook);

module.exports = router;
