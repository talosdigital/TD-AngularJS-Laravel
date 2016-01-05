describe('DashboardCtrl', function(){

  beforeEach(module('TDAngularJSLaravel'));
  var $q, $controller, dashboardCtrl, state, authService;

  beforeEach(inject(function($injector){
  	$q = $injector.get('$q');
    $controller = $injector.get('$controller');

    authService = {
      logout: function(){}
    };

    state = {
    	go: function(){}
    };

    dashboardCtrl = $controller('DashboardCtrl',{
    	$state: state,
      authService: authService,
      user: {firstname:'test'}
    });

  }));

  describe('logout', function(){
  	it('should logout and go to state home',function(){
  	 	spyOn(state,'go');
      spyOn(authService,'logout');
  	 	dashboardCtrl.logout();
      expect(authService.logout).toHaveBeenCalled();
  	  expect(state.go).toHaveBeenCalledWith('home');
  	});
  });
});