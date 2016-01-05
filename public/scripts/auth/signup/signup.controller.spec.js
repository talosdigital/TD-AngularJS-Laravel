describe('SignupCtrl', function(){

  beforeEach(module('TDAngularJSLaravel'));
  var $q, $controller, $rootScope, scope, signupCtrl, state, authService, userService;

  beforeEach(inject(function($injector){
  	$q = $injector.get('$q');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();

    authService = {
      login: function(){}
    };

    userService = {
      createUser: function(){}
    };

    state = {
    	go: function(){}
    };

    signupCtrl = $controller('SignupCtrl',{
      $scope : scope,
    	$state: state,
      authService: authService,
      userService: userService
    });

  }));

  describe('signup', function(){

  	it('should signup, login and go to state dashboard',function(){
      var responseUser = $q.defer();
      var responseAuth = $q.defer();
      // spyOn(HomeServiceMock, 'requestHtml').and.returnValue(response.promise);
      spyOn(userService,'createUser').and.returnValue(responseUser.promise);
      spyOn(authService,'login').and.returnValue(responseAuth.promise);
      spyOn(state,'go');
      var user = {
        firstname: 'Testn',
        lastname: 'Testl',
        password: 'test4echo',
        email: 'test@test.com'
      };
      signupCtrl.user = user;
  	 	signupCtrl.signup();
      responseUser.resolve();
      scope.$apply();
      responseAuth.resolve();
      scope.$apply();

      expect(userService.createUser).toHaveBeenCalledWith(user);
      expect(authService.login).toHaveBeenCalledWith({
        email: user.email,
        password: user.password
      });
  	  expect(state.go).toHaveBeenCalledWith('dashboard');
  	});

    it('should not call login is signup failed',function(){
      var responseUser = $q.defer();
      var responseAuth = $q.defer();
      // spyOn(HomeServiceMock, 'requestHtml').and.returnValue(response.promise);
      spyOn(userService,'createUser').and.returnValue(responseUser.promise);
      spyOn(authService,'login').and.returnValue(responseAuth.promise);
      spyOn(state,'go');
      var user = {
        firstname: 'Testn',
        lastname: 'Testl',
        password: 'test4echo',
        email: 'test@test.com'
      };
      signupCtrl.user = user;
      signupCtrl.signup();
      responseUser.reject();
      scope.$apply();

      expect(userService.createUser).toHaveBeenCalledWith(user);
      expect(authService.login).not.toHaveBeenCalled();
      expect(state.go).not.toHaveBeenCalled();
    });

    it('should not go to state dashboard if login failed',function(){
      var responseUser = $q.defer();
      var responseAuth = $q.defer();
      // spyOn(HomeServiceMock, 'requestHtml').and.returnValue(response.promise);
      spyOn(userService,'createUser').and.returnValue(responseUser.promise);
      spyOn(authService,'login').and.returnValue(responseAuth.promise);
      spyOn(state,'go');
      var user = {
        firstname: 'Testn',
        lastname: 'Testl',
        password: 'test4echo',
        email: 'test@test.com'
      };
      signupCtrl.user = user;
      signupCtrl.signup();
      responseUser.resolve();
      scope.$apply();
      responseAuth.reject();
      scope.$apply();

      expect(userService.createUser).toHaveBeenCalledWith(user);
      expect(authService.login).toHaveBeenCalledWith({
        email: user.email,
        password: user.password
      });
      expect(state.go).not.toHaveBeenCalled();
    });

  });
});