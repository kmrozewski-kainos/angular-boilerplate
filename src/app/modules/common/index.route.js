(function() {
  angular.module('app.common').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'HomeController'
      });
  });
})();
