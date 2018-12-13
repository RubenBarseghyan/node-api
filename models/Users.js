const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const userSchema = new db.Schema({
  name: {
    type:String,
    trim: true,
    required:true
  },
  surname: {
    type: String,
    trim: true,
    required:true
  },
  age: {
    type:Number,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
});

module.exports = mongoose.model('user', userSchema);
