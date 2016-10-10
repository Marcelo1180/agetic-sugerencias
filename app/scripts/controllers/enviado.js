'use strict';

/**
 * @ngdoc function
 * @name sugerenciasApp.controller:EnviadoCtrl
 * @description
 * # EnviadoCtrl
 * Controller of the sugerenciasApp
 */
angular.module('sugerenciasApp')
  .controller('EnviadoCtrl', function ($scope, $timeout, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $timeout(function (){
      $location.path('/');
    }, 3000);
  });
