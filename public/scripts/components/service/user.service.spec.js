describe('userService', function() {

	var userService, scope, $httpBackend, $rootScope;

	beforeEach(module('TDAngularJSLaravel'));

	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		userService = $injector.get('userService');
		$rootScope = $injector.get('$rootScope');
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('createUser', function() {
		it('should create a user and return the id', function() {
			var user = {
				firstname: 'Testn',
				lastname: 'Testl',
				password: 'test4echo',
				email: 'test@test.com'
			};
			$httpBackend.whenPOST('api/v1/user', user).respond('1');
			var createUser = userService.createUser(user).then(function(userId){
				expect(userId).toBe('1');
			});
			$httpBackend.flush();
			expect(createUser.then).not.toBe(undefined);
		});
	});

});