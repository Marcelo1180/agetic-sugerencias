'use strict';

describe('Service: sugerencias', function () {

  // load the service's module
  beforeEach(module('sugerenciasApp'));

  // instantiate service
  var sugerencias;
  beforeEach(inject(function (_sugerencias_) {
    sugerencias = _sugerencias_;
  }));

  it('should do something', function () {
    expect(!!sugerencias).toBe(true);
  });

});
