'use strict';

angular.module('TDAngularJSLaravel')
	.controller('HomeCtrl', function($state) {
		var vm = this;
		vm.login = function(){
			$state.go('login');
		};
		vm.signup = function(){
			$state.go('signup');
		};
	});