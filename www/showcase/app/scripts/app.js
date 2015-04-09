'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
var x = 0;
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        x: 0
      })
      .when('/projets', {
        templateUrl: 'views/projets.html',
        controller: 'ProjetsCtrl',
        x: 1
      })
      .when('/pro', {
        templateUrl: 'views/pro.html',
        controller: 'ProCtrl',
        x: 2
      })
      .when('/etudes', {
        templateUrl: 'views/etudes.html',
        controller: 'EtudesCtrl',
        x: 3
      })
      .otherwise({
        redirectTo: '/',
        x: 0
      });
  });
