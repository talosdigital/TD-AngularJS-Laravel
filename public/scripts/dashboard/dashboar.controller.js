'use strict';

angular.module('TDAngularJSLaravel')
	.controller('DashboardCtrl', function($state, authService, user){
		var vm = this;
		vm.user = user;
		vm.userKeys = Object.keys(user);

		vm.logout = function(){
			authService.logout();
			$state.go('home');
		}
	})
