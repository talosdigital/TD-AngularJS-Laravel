'use strict';

angular.module('TDAngularJSLaravel')
	.service('authService', function($http, localStorageService) {
		
		var prefix = 'api/v1/auth';

		this.login = function(credentials){
			return $http.post(prefix +'/login', credentials).then(function(data){
				localStorageService.set('token', data.data.token);
				return data.data;
			});
		};
		this.logout = function(){
			localStorageService.clearAll();
		};

		this.current = function(){
			return $http.get(prefix +'/current?token='+ localStorageService.get('token')).then(function(data){
				return data.data;
			});
		};

		this.getToken = function(){
			return localStorageService.get('token');
		};

	});