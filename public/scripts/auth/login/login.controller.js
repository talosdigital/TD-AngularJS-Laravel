'use strict';

angular.module('TDAngularJSLaravel')
	.controller('LoginCtrl', function($state, authService) {

		var vm = this;
		
		vm.login = function(){
			authService.login(vm.credentials).then(
				function (userToken){
					$state.go('dashboard');
				},
				function(error){
					alert('something went wrong');
					console.error(error);
				}
			);
		};
	});