'use strict';

describe('myApp.login module', function() {

  beforeEach(module('myApp.login'));

  describe('login controller', function(){

    it('should instace LoginCtrl', inject(function($controller) {
      var loginCtrl = $controller('LoginCtrl');
      expect(loginCtrl).toBeDefined();
    }));

  });
});
