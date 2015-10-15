angular
  .module("lightsaberApp")
  .controller("MainController", MainController);

MainController.$inject = ['$resource']
function MainController($resource){

  var self = this;

  var Character = $resource('http://localhost:3000/characters/:id', { id: '@_id'}, {
    'update' : method: 'PUT'}
  });

  this.characters = Character.query();
  //this is 'linking to' all the restful routes for us

  this.selectCharacter = function(character) {
      self.selectedCharacter = Character.get({ id: character._id })
      self.
  }

  this.editCharacter = function(character) {
    self.selectedCharacter = character;
  }


  this.newCharacter= new Character

 this.addCharacter = function(){
    self.newCharacter.$save().then(function(character){
        self.characters.push(character)
        self.newCharacter={}

    })
  }

  this.updateCharacter = function() {
    Character.update(self.selectedCharacter)
  }




}