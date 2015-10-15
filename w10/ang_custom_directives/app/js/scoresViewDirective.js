angular.module('CardsAgainstAssembly')
  .directive('scores', ScoresViewDirective)

  function ScoresViewDirective() {
    var directive = {}

    directive.restrict = 'EA';//element attribute

    directive.templateUrl = '_scoresView.html' // optional '_' tells us that it is a partial. 

    // directive.scope ={
    //   question: '@'
    // }

    return directive;
  }