'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get("data/infos.json")
      .success(function(data) {
        $scope.infos=data;
      })
  });
