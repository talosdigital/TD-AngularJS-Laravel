'use strict';

angular.module('TDAngularJSLaravel')
	.controller('SignupCtrl', function($state, authService, userService){

		var vm = this;

		vm.signup = function(){
			userService.createUser(vm.user).then(
				function (userId){
					var credentials = {
						email: vm.user.email,
						password: vm.user.password
					};
					authService.login(credentials).then(
						function (userToken){
							$state.go('dashboard');
						},
						function(error){
							alert('something went wrong');
							console.error(error);
						}
					);
				},
				function(error){
					alert('something went wrong');
					console.error(error);
				}
			);
		};

	});
	