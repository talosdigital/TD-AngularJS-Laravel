'use strict';

angular.module('TDAngularJSLaravel')
	.service('userService', function($http) {
		var prefix = 'api/v1/user'

		this.createUser = function (user){
			return $http.post(prefix, user).then(function(data){
				return data.data;
			});
		}
	});