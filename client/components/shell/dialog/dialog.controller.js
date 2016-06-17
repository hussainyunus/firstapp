'use strict';

angular.module('firstappApp')
  .controller('DialogController', function ($scope, $mdDialog) {
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };

  
});
