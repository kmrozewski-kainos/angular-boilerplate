(function() {
  angular.module('app.common').controller('HomeController', function($scope, CONST_FOO) {
    $scope.msg = "Konrad";
    $scope.foo = CONST_FOO;

  });
})();
