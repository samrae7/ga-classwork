var Quote = require('../models/quote');

// INDEX
function getAll(req, res) {
  Quote.find(function(error, quotes) {
    if(error) res.json({message: 'Could not find any quote'});

    // res.json({quotes: quotes});
    // res.render(index)

    res.render('index', { title: 'Quit a good quote app', message: 'Hello there welcome to Quotes Schmotes!', quotes:quotes})
  });
}

//NEW
function renderForm(req, res) {
  res.render('new', { title: 'Quit a good quote app', message: 'Hello there welcome to Quotes Schmotes!'})
}

// CREATE
function createQuote(req, res) {
  console.log('in POST');
  console.log('body:',req.body);
  var quote = new Quote(req.body);

  quote.save(function(error) {
    if(error) res.json({messsage: 'Could not ceate quote b/c:' + error});
    console.log(quote);
    // res.json(quote);
    res.redirect('/quotes');
  });
}

// SHOW
function getQuote(req, res) {
  var id = req.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) res.json({message: 'Could not find quote b/c:' + error});

    res.json({quote: quote});
  });
}

// UPDATE
function updateQuote(req, res) {
  var id = req.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) res.json({message: 'Could not find quote b/c:' + error});

    if(req.body.text) quote.text = req.body.text;
    if(req.body.author) quote.author = req.body.author;

    quote.save(function(error) {
      if(error) res.json({messsage: 'Could not update quote b/c:' + error});

      res.json({message: 'Quote successfully updated'});
    });
  });
}

// DELETE
function removeQuote(req, res) {
  var id = req.params.id;

  Quote.remove({_id: id}, function(error) {
    if(error) res.json({message: 'Could not delete quote b/c:' + error});

    res.json({message: 'Quote successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote,
  renderForm: renderForm
  //the part on the left is telling you what that function will be called in the file that exports it in
}
