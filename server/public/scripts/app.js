'use strict';


angular.module('malApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
     /*   $stateProvider
        
            // route for the search page
            .state('app', {
                url:'/',
                views: {
                    'content': {
                        templateUrl : 'views/search.html',
                        controller  : 'searchController'
                    }
                }

            })
        
            // route for the found page
            .state('app.found', {
                url:'found',
                views: {
                    'content@': {
                        templateUrl : 'views/found.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        

            

            
    
        $urlRouterProvider.otherwise('/');*/
    })
;

angular.module('foundApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider

        .state('app',{
             url:'/',
                views: {
                    'content': {
                        templateUrl : 'views/search.html',
                        controller  : 'searchController'
                    }
                }
        })
})