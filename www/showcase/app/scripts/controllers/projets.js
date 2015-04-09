'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ProjetsCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get("data/projets.json")
      .success(function(data) {
        $scope.projects=data;
      })
  });
