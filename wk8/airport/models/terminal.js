var mongoose = require('mongoose');

var terminalSchema = new mongoose.Schema({
  name:String,
  capacity: Number
});

var Terminal = mongoose.model('Terminal', terminalSchema);

module.exports = Terminal;