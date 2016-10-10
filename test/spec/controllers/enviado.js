'use strict';

describe('Controller: EnviadoCtrl', function () {

  // load the controller's module
  beforeEach(module('sugerenciasApp'));

  var EnviadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnviadoCtrl = $controller('EnviadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EnviadoCtrl.awesomeThings.length).toBe(3);
  });
});
