(function() {
  angular.module('app').run(function($rootScope, APP_CONFIG) {
    $rootScope.LANG = APP_CONFIG.LANG;
  });
})();
