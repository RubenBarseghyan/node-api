const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/book_api');

module.exports = mongoose;
