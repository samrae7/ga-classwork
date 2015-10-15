var mongoose = require('mongoose');

var quoteSchema = new mongoose.Schema({
  text: String,
  author: String
});

module.exports = mongoose.model('Quote', quoteSchema);