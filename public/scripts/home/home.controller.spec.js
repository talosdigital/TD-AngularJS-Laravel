describe('HomeCtrl', function(){

  beforeEach(module('TDAngularJSLaravel'));
  var $q, $controller, homeController, state;

  beforeEach(inject(function($injector){
  	$q = $injector.get('$q');
    $controller = $injector.get('$controller');
    state = {
    	go: function(){}
    };
    homeController = $controller('HomeCtrl',{
    	$state: state 
    });

  }));

  describe('login', function(){
  	it('should go to state login',function(){
	 	spyOn(state,'go');
	 	homeController.login();
	  	expect(state.go).toHaveBeenCalledWith('login');	
  	});
  });

  describe('signup', function(){
    it('should go to state signup',function(){
    spyOn(state,'go');
    homeController.signup();
      expect(state.go).toHaveBeenCalledWith('signup'); 
    });
  });

});