'use strict';

angular.module('malApp')
        .constant("baseURL","http://localhost:3000/")
        .factory('searchFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            var searchfac = {};

            // Implement update feedBack
            searchfac.query = function () {
                return $resource(baseURL, null, {'post':{method:'POST'}});
            };

            return searchfac;
        }])
