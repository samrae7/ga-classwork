angular.module('CardsAgainstAssembly')
  .directive('card', CardViewDirective)

  function CardViewDirective() {
    var directive = {}

    directive.restrict = 'EA';//element attribute

    directive.templateUrl = '_cardView.html' // optional '_' tells us that it is a partial. 

    directive.scope ={
      question: '@'
    }

    return directive;
  }