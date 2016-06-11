'use strict';


angular.module('confusionApp')
        .constant('baseURL','http://178.70.89.41:3000/')
        .factory('animeFactory', ['$resource','baseURL', function($resource,baseURL){
            var anifac = {};
            anifac.load = function(name){
                return $resource(baseURL+'aList/details/'+name, null, {'get':{mathod:'GET'}});
            }
            return anifac;
        }])


angular.module('malApp')
        .constant("baseURL","http://178.70.89.41:3000/")
        .factory('searchFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            var searchfac = {};

            // make query
            searchfac.query1 = function () {
                
                return $resource(baseURL, null, {'post':{method:'POST'}});
            };

            return searchfac;
        }])