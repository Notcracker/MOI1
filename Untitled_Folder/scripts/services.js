'use strict';

angular.module('malApp')
        .constant("baseURL","http://localhost:3000/")
        .factory('searchFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            var searchfac = {};

            // make query
            searchfac.query1 = function () {
            	
                return $resource(baseURL, null, {'post':{method:'POST'}});
            };

            return searchfac;
        }])

angular.module('malApp3')
        .constant('baseURL','http://localhost:3000/')
        .factory('animeFactory', ['$resource','baseURL', function($resource,baseURL){
            var anifac = {};
            anifac.load = function(name){
                return $resource(baseURL+'aList/details/'+name, null, {'get':{mathod:'GET'}});
            }
            return anifac;
        }])