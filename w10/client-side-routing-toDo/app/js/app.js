angular
	.module('todoApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')
    //$locationProvider.html5Mode(true)

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('archive', {
      url: '/archive',
      templateUrl:'archive.html'
    })
    .state('team', {
      url: '/team',
      templateUrl:'team.html'
    })
});