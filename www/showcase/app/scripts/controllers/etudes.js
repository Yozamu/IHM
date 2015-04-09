'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('EtudesCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get("data/etudes.json")
      .success(function(data) {
        $scope.years=data;
      });
  });
