angular.module('museumApp')
  .controller('ExhibitController', ExhibitController);

function ExhibitController() {
  this.image = 'http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Kongo/Kongo_DigitalAssets_HeroImage.jpg?h=360&la=en&mw=988&w=988';
  this.title = 'Kongo: Power and Majesty';
  this.summary = 'This international loan exhibition will explore the region\'s history and culture through 146 of the most inspired creations of Kongo masters from the late fifteenth through the early twentieth century.'
}