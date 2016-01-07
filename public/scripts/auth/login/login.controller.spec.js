describe('LoginCtrl', function(){

  beforeEach(module('TDAngularJSLaravel'));
  var $q, $controller, $rootScope, scope, loginCtrl, state, authService;

  beforeEach(inject(function($injector){
  	$q = $injector.get('$q');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();

    authService = {
      login: function(){}
    };

    state = {
    	go: function(){}
    };

    loginCtrl = $controller('LoginCtrl',{
      $scope : scope,
    	$state: state,
      authService: authService,
      user: {firstname:'test'}
    });

  }));

  describe('login', function(){

  	it('should login and go to state dashboard',function(){
      var response = $q.defer();
      spyOn(authService,'login').and.returnValue(response.promise);
      spyOn(state,'go');
      loginCtrl.credentials = {
        email: 'test@test.com',
        password: 'test4echo'
      }
  	 	loginCtrl.login();
      response.resolve();
      scope.$apply();
      expect(authService.login).toHaveBeenCalledWith(loginCtrl.credentials);
  	  expect(state.go).toHaveBeenCalledWith('dashboard');
  	});  

    it('should login and go to state dashboard',function(){
      var response = $q.defer();
      spyOn(authService,'login').and.returnValue(response.promise);
      spyOn(state,'go');
      loginCtrl.credentials = {
        email: 'test@test.com',
        password: 'test4echo'
      }
      loginCtrl.login();
      response.reject();
      scope.$apply();
      expect(authService.login).toHaveBeenCalledWith(loginCtrl.credentials);
      expect(state.go).not.toHaveBeenCalled();
    });

  });
});