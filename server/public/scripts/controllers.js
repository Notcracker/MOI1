'use strict'

angular.module('malApp')


	.controller('searchController', ['$scope', 'searchFactory', function($scope, searchFactory) {
        $scope.query = {userName:''};

        $scope.sendQuery = function(){
        	console.log($scope.query);
        	searchFactory.query1().post($scope.query);
        }
          
    }]);