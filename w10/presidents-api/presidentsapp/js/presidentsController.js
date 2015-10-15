angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];
//this line preserves the injection after minimisation

//$http is almost exactly the same as Ajax

function PresidentsController($http){

  var self = this
  
  self.all = []

  function getPresidents() {
    $http.get('http://localhost:3000/presidents')
    .then(function(response){
      self.all = response.data.presidents;
      //this can't work here so use self
    })
  }

  getPresidents()
  console.log(self.all)

  self.addPresident = addPresident;
  //this is a reference to the function. We don;t want the function to run hence lack of parentheses

  self.newPresident = {};

  function addPresident(){
    // self.all.push(self.newPresident);
    // self.newPresident = {};
    

      $http.post('http://localhost:3000/presidents', self.newPresident).then(function(response){
        getPresidents();
        // or //self.all.push(response.data.president)
      });

      self.newPresident = {}
      //reset newPresident to be empty
    }
  }

