var mongoose = require('mongoose')

var Terminal = mongoose.model('Terminal')

var airportSchema = new mongoose.Schema({
  name: {type: String, required: true},
  country: String,
  code: {type: String, minlength: 3},
  terminals: [Terminal.schema]
})

var Airport = mongoose.model('Airport', airportSchema)

module.exports = Airport;