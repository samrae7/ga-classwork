angular.module('happyApp')
  .controller('HappyController', HappyController);

function HappyController() {

  this.emotions = []

  this.newEmotion = '';

  this.add = addEmotion;

  function addEmotion() {
    this.emotions.push(this.newEmotion)
  }

  function Avg() {
    this.emotions.reduce
  }

}