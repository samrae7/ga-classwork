angular.module('museumApp')
  .controller('InfoController', InfoController);

function InfoController() {
  this.hours = {
    Monday: '10.00 - 17.00',
    Tuesday: '10.00 - 17.00', 
    Wednesday: '10.00 - 17.00',
    Thursday: '10.00 - 17.00',
    Friday: '10.00 - 17.00',
    Saturday: '10.00 - 17.00',
    Sunday: '10.00 - 17.00'
  }
  this.price = {
    adults: '$25',
    seniors: '$17',
    students: '$12'
  }
}