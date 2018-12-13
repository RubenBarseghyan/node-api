const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const bookSchema = new db.Schema({
  title:{
    type: String,
    trim: true,
    required: true,

  },
  image: {
    type: String,
    trim: true,
    default: 'default-book.jpg',

  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  publisher: {
    type: String,
    trim: true,
    required: true,
  },
  review: {
    type: String,
    trim: true,
    required: false
  },
  sales: {
    type:Boolean,
    dafault: false
  },
  description: {
    type: String
  },
  published: {
    type: Date,
    default: new Date()
  },
  author: {
    type: String,
    trim: true,
    required: true,
  }

});

module.exports = db.model('book', bookSchema);
