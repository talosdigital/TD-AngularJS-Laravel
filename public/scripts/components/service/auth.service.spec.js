describe('authService', function() {

  var mock = {
    set: jasmine.createSpy(),
    get: jasmine.createSpy(),
    clearAll: jasmine.createSpy()
  };

  beforeEach(module('TDAngularJSLaravel', function($provide) {
    $provide.value('localStorageService', mock);
  }));

  var authService, scope, $httpBackend, $rootScope;

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    authService = $injector.get('authService');
    $rootScope = $injector.get('$rootScope');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('login', function() {
    it('should login and save the token', function() {
      var credentials = {
        email: 'test@test.com',
        password: 'test4echo'
      };

      var response = {
        token: 'testToken'
      };
      $httpBackend.whenPOST('api/v1/auth/login', credentials).respond(response);
      var login = authService.login(credentials).then(function(result) {
        expect(result.token).toBe(response.token);
      });
      $httpBackend.flush();
      expect(mock.set).toHaveBeenCalledWith('token', 'testToken');
      expect(login.then).not.toBe(undefined);
    });
  });

  describe('logout', function() {
    it('should clear the token', function() {
      authService.logout();
      expect(mock.clearAll).toHaveBeenCalled();
    });
  });

  describe('current', function() {
    it('should call the correct endpoint for the user', function() {
      var user = {
        id: '1',
        firstname: 'testn',
        lastname: 'testl',
        email: 'test@test.com',
        created_at: '2015-12-21 22:05:04',
        updated_at: '2015-12-21 22:05:04'
      };
      $httpBackend.whenGET('api/v1/auth/current?token=testToken').respond(user);
      mock.get.and.returnValue('testToken');
      var current = authService.current().then(function(data) {
        expect(user.id).toBe(user.id);
        expect(user.firstname).toBe(user.firstname);
      });
      $httpBackend.flush();
      expect(mock.get).toHaveBeenCalled();
      expect(current.then).not.toBe(undefined);
    });
  });

  describe('getToken', function() {
    it('should return the saved token', function() {
      mock.get.and.returnValue('testToken');
      expect(authService.getToken()).toBe('testToken');
    });
  });

});