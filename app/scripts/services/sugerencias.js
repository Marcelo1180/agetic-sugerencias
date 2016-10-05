'use strict';

/**
 * @ngdoc service
 * @name sugerenciasApp.sugerencias
 * @description
 * # sugerencias
 * Factory in the sugerenciasApp.
 .factory('sugerencias', function ($http, restUrl) {
 */
angular.module('sugerenciasApp')
  .factory('sugerencias', function ($http, restUrl) {
    return {
      addSugerencia: function(item){
          return $http.post(restUrl+'prestamo/', item);
      }
    };
  });
