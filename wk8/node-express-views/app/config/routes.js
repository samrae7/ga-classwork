var express = require('express');
var router = express.Router()
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST

var quotesController = require('../controllers/quotesController');

// QUOTES API('/')

router.route('/quotes')
  .get(quotesController.getAll)
  .post(quotesController.createQuote);
router.route('/quotes/new')
  .get(quotesController.renderForm)
router.route('/quotes/:id')
  .get(quotesController.getQuote)
  .put(quotesController.updateQuote)
  .delete(quotesController.removeQuote);

module.exports = router;