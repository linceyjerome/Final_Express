const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  age: Number,
  occupation: String,
  movies: [
    {
      movieid: Number,
      rating: Number
    }
  ]
});

module.exports = mongoose.model('User', userSchema, 'utilisateurs');
