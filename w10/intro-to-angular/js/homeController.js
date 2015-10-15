angular.module('introApp')
  .controller('HomeController', HomeController);

// We capitalise this function because it's a constructor function
function HomeController() {
  this.awesome = true;
  this.numbers = [1,456,89,567];
  this.crisps = ['Taytos', 'Space Invaders', 'Frazzles'];
  this.teams = {
    spurs : 'tottenham',
    gunners : 'arsenal'
  }
  return this; // this line is not actually used - this will be available anyway
}''