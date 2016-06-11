'use strict';

angular.module('confusionApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'http://178.70.89.41:3000/views/header.html',
                    },
                    'content': {
                        templateUrl : 'http://178.70.89.41:3000/views/animelist.html',
                        controller  : 'animelistController'
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.mangalist', {
                url:'mangalist',
                views: {
                    'content@': {
                        templateUrl : 'http://178.70.89.41:3000/views/mangalist.html'                                           
                    }
                }
            })
        
         
         
    
        $urlRouterProvider.otherwise('/');
    })
;

angular.module('malApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
    
    })
;
