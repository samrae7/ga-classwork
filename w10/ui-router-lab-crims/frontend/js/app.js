angular
  .module('InfamousCriminals', ['ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('crims', {
      url: '/',
      templateUrl: 'crims.html'
    })
    .state('new-crim', {
      url: '/new-crim',
      templateUrl:'new-crim.html'
    })
     .state('about', {
      url: '/about',
      templateUrl:'about.html'
    })

};