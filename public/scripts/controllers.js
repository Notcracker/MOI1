'use strict'

angular.module('malApp')


	.controller('searchController', ['$scope', 'searchFactory', function($scope, searchFactory) {
        $scope.query = '';

        $scope.sendQuery = function(){
        	searchFactory.query().post($scope.feedback);
        }
          
    }]);