'use strict';

/**
 * @ngdoc function
 * @name sugerenciasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sugerenciasApp
 */
angular.module('sugerenciasApp')
  .controller('MainCtrl', function ($scope, $location, sugerencias) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.inscribir = function () {
      sugerencias.addSugerencia({
        sugerencia: $scope.sugerencia
      });
      $location.path('/enviado/');
    };
  });
