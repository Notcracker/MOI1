'use strict';


angular.module('malApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
    
    })
;



'use strict';

angular.module('malApp3', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'http://localhost:3000/views/header.html',
                    },
                    'content': {
                        templateUrl : 'http://localhost:3000/views/animelist.html',
                        controller  : 'animelistController'
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.mangalist', {
                url:'mangalist',
                views: {
                    'content@': {
                        templateUrl : 'http://localhost:3000/views/mangalist.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        
            

          

    
        $urlRouterProvider.otherwise('/');
    })
;
