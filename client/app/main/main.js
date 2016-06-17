'use strict';

angular.module('firstappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
      .when('/home',{
        templateUrl:'app/main/home.html'
      })
  });