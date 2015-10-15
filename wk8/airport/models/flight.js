var mongoose = require('mongoose');


var flightSchema = new mongoose.Schema({
  airline: String,
  from: {type: mongoose.Schema.ObjectId, ref: 'Airport'},
  to: {type: mongoose.Schema.ObjectId, ref: 'Airport'}
})

var Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight; 