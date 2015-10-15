angular.module('crimsApp', [])
  .controller('CrimsController', CrimsController);

CrimsController.$inject = ['$http'];

  function CrimsController($http){

    var self = this

    this.all=[]

    function getCrims() {

      $http.get('http://localhost:3000/criminals').then(function(response) {
        self.all=response.data.criminals
      })

    }

    self.addCrim = addCrim



    this.newCrim ={}

    function addCrim() {

      $http.post('http://localhost:3000/criminals', self.newCrim).then(function(response) {
        getCrims()
      })

      self.newCrim = {}

    }

  }