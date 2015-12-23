'use strict';

angular
    .module('TDAngularJSLaravel', [
        'ngRoute',
        'ui.router',
        'ngTouch',
        'ngCookies',
        'LocalStorageModule'
    ])
    .config(function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'scripts/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            }).state('login', {
                url: '/auth/login',
                templateUrl: 'scripts/auth/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            }).state('signup', {
                url: '/auth/signup',
                templateUrl: 'scripts/auth/signup/signup.html',
                controller: 'SignupCtrl',
                controllerAs: 'signup'
            }).state('dashboard', {
                url: '/dashboard',
                templateUrl: 'scripts/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboard',
                resolve:{
                    user: function(authService, $q,  $state){
                        var deferred = $q.defer();
                        authService.current().then(function(data){
                            deferred.resolve(data)
                        },function(){
                            $state.go('login')
                            deferred.reject();
                        });
                        return deferred.promise;
                    }
                }
            });

    });