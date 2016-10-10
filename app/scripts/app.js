'use strict';

/**
 * @ngdoc overview
 * @name sugerenciasApp
 * @description
 * # sugerenciasApp
 *
 * Main module of the application.
 */
angular
  .module('sugerenciasApp', [
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
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/prueba', {
        templateUrl: 'views/prueba.html',
        controller: 'PruebaCtrl',
        controllerAs: 'prueba'
      })
      .when('/enviado', {
        templateUrl: 'views/enviado.html',
        controller: 'EnviadoCtrl',
        controllerAs: 'enviado'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
