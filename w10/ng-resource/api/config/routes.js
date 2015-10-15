var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var charactersController = require('../controllers/characters');

// http://127.0.0.1:3000/characters
router.route('/characters')

  //GET all characters
  .get(charactersController.getAll)

  //POST a new blob
  .post(charactersController.createCharacter);


router.route('/characters/:id')

  // GET return specific characters
  .get(charactersController.getCharacter)

  // PUT update existing characters
  .put(charactersController.updateCharacter)

  // DELETE remove specific characters from DB
  .delete(charactersController.removeCharacter);


module.exports = router